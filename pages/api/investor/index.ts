import { NextApiRequest, NextApiResponse } from "next/types";
import nextConnect from "next-connect";
import { z } from "zod";

import dbConnect from "../../../lib/dbConnect";
import Investor from "../../../models/investor";
import User from "../../../models/user";
import { verifyUser } from "../../../lib/auth";
import { ApiResponse } from "../../../models/ApiResponse";

interface NextConnectApiRequest extends NextApiRequest {
	user?: {
		id: string;
		investor_id: string;
		email: string;
		iat: number;
		exp: number;
	};
}

type ResponseData = ApiResponse<string>;

const router = nextConnect({
	onError(
		error,
		req: NextConnectApiRequest,
		res: NextApiResponse<ResponseData>
	) {
		res.status(501).json({ error: `something went wrong! ${error.message}` });
	},
	onNoMatch(req: NextConnectApiRequest, res: NextApiResponse<ResponseData>) {
		res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
	},
});

const insertSchema = z.object({
	full_name: z.optional(z.string()),
	cpf: z.optional(z.string().min(11).max(11)),
	cnpj: z.optional(z.string().min(14).max(14)),
	invited_by: z.string(),
	corporate_name: z.optional(z.string()),
	uf: z.optional(z.string()),
	is_legal_entity: z.optional(z.boolean()),
});

router.post(verifyUser, async (req, res) => {
	try {
		await dbConnect();

		const userData = req.body;
		const user = req?.user;

		insertSchema.parse(userData);

		const investorExists = await Investor.findOne({
			...((userData?.cpf && { cpf: userData.cpf }) ||
				(userData?.cnpj && { cnpj: userData?.cnpj })),
		});

		if (investorExists) {
			return res.status(400).json({
				error: "CPF/CNPJ already registered",
			});
		}

		const investor = await Investor.create(req.body);
		await User.updateOne({ _id: user?.id }, { investor_id: investor._id });

		res.status(201).json({ data: investor });
	} catch (error: any) {
		res.status(400).json({
			error: !/^[\[|\{](\s|.*|\w)*[\]|\}]$/.test(error.message)
				? error.message
				: JSON.parse(error.message),
		});
	}
});

export default router;
