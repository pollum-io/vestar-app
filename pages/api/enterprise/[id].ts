import { NextApiRequest, NextApiResponse } from "next";
import mongoose, { isValidObjectId } from "mongoose";
import nextConnect from "next-connect";

import dbConnect from "../../../lib/dbConnect";
import Enterprise from "../../../models/enterprise";
import Opportunity from "../../../models/oportunity";
import { verifyUser } from "../../../lib/auth";
import { ApiResponse } from "../../../models/ApiResponse";

type ResponseData = ApiResponse<string>;

const router = nextConnect({
	onError(error, req: NextApiRequest, res: NextApiResponse<ResponseData>) {
		res.status(501).json({ error: `something went wrong! ${error.message}` });
	},
	onNoMatch(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
		res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
	},
});

export async function getAvailableAndClosedOpportunities(ids: any) {
	const dateNow = new Date();

	const is_array = Array.isArray(ids);
	const oppData = await Opportunity.aggregate([
		{
			$match: {
				enterprise_id: is_array
					? { $in: ids }
					: new mongoose.Types.ObjectId(`${ids}`),
			},
		},
		{
			$group: {
				_id: "$enterprise_id",
				opportunities_closed: {
					$sum: { $cond: [{ $lte: ["$end_date", dateNow] }, 1, 0] },
				},
				opportunities_available: {
					$sum: { $cond: [{ $gte: ["$end_date", dateNow] }, 1, 0] },
				},
			},
		},
	]);

	return is_array ? oppData : oppData[0];
}

router.get(async (req, res) => {
	try {
		await dbConnect();

		const { id } = req.query;

		if (!isValidObjectId(id)) {
			return res.status(400).json({ error: "invalid id" });
		}

		const enterprise = await Enterprise.findById(id).lean();

		if (!enterprise) {
			return res.status(404).json({ error: "enterprise not found" });
		}

		const { opportunities_available, opportunities_closed } =
			await getAvailableAndClosedOpportunities(id);

		const defaultOppData = {
			opportunities_closed: 0,
			opportunities_available: 0,
		};

		res.status(200).json({
			data: {
				...enterprise,
				opportunities_closed: opportunities_closed || defaultOppData,
				opportunities_available: opportunities_available || defaultOppData,
			},
		});
	} catch (error: any) {
		res.status(400).json({ error: error.message });
	}
});

router.put(verifyUser, async (req, res) => {
	try {
		await dbConnect();

		const { id } = req.query;

		const enterprise = await Enterprise.findOneAndUpdate(
			{ _id: id },
			req.body,
			{
				new: true,
				runValidators: true,
			}
		);

		if (!enterprise) {
			return res.status(204).end("no enterprise data to update");
		}

		res.status(200).json({ data: enterprise });
	} catch (error: any) {
		res.status(400).json({ error: error.message });
	}
});

router.delete(verifyUser, async (req, res) => {
	try {
		await dbConnect();

		const { id } = req.query;

		await Enterprise.findByIdAndDelete(id);

		res.status(204).end();
	} catch (error: any) {
		res.status(400).json({ error: error.message });
	}
});

export default router;
