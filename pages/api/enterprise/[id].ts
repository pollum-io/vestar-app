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

		const dateNow = new Date();

		const [oppData] = await Opportunity.aggregate([
			{ $match: { enterprise_id: new mongoose.Types.ObjectId(`${id}`) } },
			{
				$group: {
					_id: "$enterprise_id",
					closed_opportunities: {
						$sum: { $cond: [{ $lte: ["$end_date", dateNow] }, 1, 0] },
					},
					opportunities_available: {
						$sum: { $cond: [{ $gte: ["$end_date", dateNow] }, 1, 0] },
					},
				},
			},
		]);

		const { opportunities_available, closed_opportunities } = oppData;

		res.status(200).json({
			data: {
				...enterprise,
				closed_opportunities,
				opportunities_available,
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
