import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { z } from "zod";

import dbConnect from "../../../lib/dbConnect";
import Enterprise from "../../../models/enterprise";
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

const InsertSchema = z.object({
	enterprise_name: z.string().max(60),
	enterprise_logo: z.optional(z.string()),
	enterprise_banner: z.optional(z.string()),
	cnpj: z.string().max(14),
	site_url: z.optional(z.string().max(40)),
	address: z.optional(z.object({} as { [key: string]: any })),
	email: z.optional(z.string()),
	contact_number: z.optional(z.string()),
	social_media: z.optional(z.object({} as { [key: string]: any })),
	description: z.optional(z.string()),
	team: z.optional(z.array(z.object({} as { [key: string]: any }))),
	enterprise_info: z.optional(z.object({} as { [key: string]: any })),
	kyc_approved: z.optional(z.boolean()),
	aum: z.optional(z.number()),
	wallet_address: z.optional(z.string()),
	investments: z.optional(z.array(z.any())),
	invited_by: z.string(),
	uf: z.string(),
});

const fetchSchema = z.object({
	page: z.optional(z.preprocess(Number, z.number())),
	limit: z.optional(z.preprocess(Number, z.number())),
});

router.post(verifyUser, async (req, res) => {
	try {
		await dbConnect();

		const enterpriseData = req.body;

		InsertSchema.parse(enterpriseData);

		const user = await Enterprise.create(enterpriseData);

		res.status(201).json({ data: user });
	} catch (error: any) {
		res.status(400).json({
			error: !/^[\[|\{](\s|.*|\w)*[\]|\}]$/.test(error.message)
				? error.message
				: JSON.parse(error.message),
		});
	}
});

router.get(async (req, res) => {
	try {
		await dbConnect();

		fetchSchema.parse(req.query);

		const page = (req.query.page as any) ? (req.query.page as any) - 1 : 0;
		const limit = (req.query.limit as any) || 12;
		const totalPages = Math.ceil((await Enterprise.countDocuments({})) / limit);

		const enterpises = await Enterprise.find({})
			.limit(limit)
			.skip(page * limit)
			.sort({ createdAt: -1 });

		res.status(200).json({ data: enterpises, totalPages });
	} catch (error: any) {
		res.status(400).json({
			error: !/^[\[|\{](\s|.*|\w)*[\]|\}]$/.test(error.message)
				? error.message
				: JSON.parse(error.message),
		});
	}
});

export default router;
