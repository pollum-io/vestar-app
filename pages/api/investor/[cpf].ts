import { NextApiRequest, NextApiResponse } from "next/types";

import dbConnect from "../../../lib/dbConnect";
import InvestorSchema from "../../../models/investor";
import { verifyUser } from "../../../lib/auth";
import { ApiResponse } from "../../../models/ApiResponse";
import nextConnect from "next-connect";

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

		const { cpf } = req.query;

		const investor = await InvestorSchema.findOne({ cpf });

		if (!investor) {
			return res.status(204).end(`There is no match for ${cpf}`);
		}

		res.status(200).json({ data: investor });
	} catch (error: any) {
		res.status(400).json({ error: error.message });
	}
});

router.put(verifyUser, async (req, res) => {
	try {
		await dbConnect();

		const { cpf } = req.query;

		const investor = await InvestorSchema.findOneAndUpdate({ cpf }, req.body, {
			new: true,
			runValidators: true,
		});

		if (!investor) {
			return res.status(204).end("no investor data to udpate");
		}

		res.status(201).json({ data: investor });
	} catch (error: any) {
		res.status(400).json({ error: error.message });
	}
});

router.delete(verifyUser, async (req, res) => {
	try {
		await dbConnect();

		const { cpf } = req.query;

		const deletedInvestor = await InvestorSchema.deleteOne({ cpf });

		if (!deletedInvestor) {
			return res.status(202).end("no investor data to delete");
		}

		res.status(204).end();
	} catch (error: any) {
		res.status(400).json({ error: error?.message });
	}
});

export default router;
