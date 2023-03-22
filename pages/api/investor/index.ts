import { NextApiRequest, NextApiResponse } from "next/types";
import nextConnect from "next-connect";
import { z } from "zod";

import dbConnect from "../../../lib/dbConnect";
import Investor from "../../../models/investor";
import User from "../../../models/user";
import { generateToken, setCookie, verifyUser } from "../../../lib/auth";
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
	full_name: z.string(),
	mother_name: z.string(),
	cpf: z.string().min(11).max(11),
	rg: z.optional(z.string()),
	cnh: z.optional(z.string()),
	profession: z.optional(z.string()),
	// address: z.optional(z.object()),
	wallet_address: z.optional(z.string()),
	marital_status: z.optional(z.object({} as { [key: string]: any })),
	phone_number: z.optional(z.string()),
	birthday_date: z.string().datetime({ offset: true }),
	city_of_birth: z.optional(z.string()),
	// TODO: remove
	cnpj: z.optional(z.string().min(14).max(14)),
	// TODO: remove
	corporate_name: z.optional(z.string()),
	// TODO: remove
	uf: z.optional(z.string()),
	// TODO: remove
	is_legal_entity: z.optional(z.boolean()),
	invited_by: z.string(),
});

router.post(verifyUser, async (req, res) => {
	try {
		await dbConnect();

		const investorData = req.body;
		const user = req?.user;

		insertSchema.parse(investorData);

		const investorExists = await Investor.findOne({ cpf: investorData.cpf });

		if (investorExists) {
			return res.status(400).json({
				error: "CPF/CNPJ already registered",
			});
		}

		const investor = await Investor.create(investorData);

		const updatedUser = await User.findOneAndUpdate(
			{ _id: user?.id },
			{ investor_id: investor._id },
			{ new: true }
		);

		const token = generateToken(updatedUser);

		setCookie(res, "livn_auth", token);

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
