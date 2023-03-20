import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { z } from "zod";

import dbConnect from "../../../lib/dbConnect";
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

const OpportunitySchema = z.object({
	name: z.string().max(60),
	address: z.optional(z.object({} as { [key: string]: any })),
	enterprise_id: z.string(),
	min_investment: z.number(),
	init_date: z.string().datetime({ offset: true }),
	expected_delivery_date: z.string().datetime({ offset: true }),
	end_date: z.string().datetime({ offset: true }),
	profitability: z.number(),
	cub_current: z.optional(z.number()),
	cub_expected: z.optional(z.number()),
	description: z.string(),
	general_info: z.array(z.string()),
	event_ensuing: z.optional(z.object({} as { [key: string]: any })),
	neighbor_description: z.string(),
	pictures_neighbor: z.array(z.string()),
	pictures_enterprise: z.array(z.string()),
	sale_end_at: z.optional(z.string()),
	token_address: z.optional(z.string()),
	token_price: z.optional(z.number()),
	token_minted: z.optional(z.number()),
	token_supply: z.optional(z.number()),
	enterprise_type: z.string(),
	description_extra: z.optional(z.string()),
	picture_extra: z.optional(z.array(z.string())),
});

const fetchSchema = z.object({
	page: z.optional(z.preprocess(Number, z.number())),
	limit: z.optional(z.preprocess(Number, z.number())),
	min_investment: z.optional(z.number()),
	enterprise_id: z.optional(z.string()),
});

router.post(verifyUser, async (req, res) => {
	try {
		await dbConnect();

		const opportunitiyData = req.body;

		OpportunitySchema.parse(opportunitiyData);

		const user = await Opportunity.create(opportunitiyData);

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

		// to do
		// criar filtros para : tipo de imovel, investimento minimo, previsao de conclusao, localizaçao

		const page = (req.query.page as any) ? (req.query.page as any) - 1 : 0;
		const limit = (req.query.limit as any) || 12;
		const totalPages = Math.ceil(
			(await Opportunity.countDocuments({
				...(req.query?.enterprise_id && {
					enterprise_id: req.query?.enterprise_id,
				}),
			})) / limit
		);

		const opportunities = await Opportunity.find({
			...(req.query?.enterprise_id && {
				enterprise_id: req.query?.enterprise_id,
			}),
		})
			.limit(limit)
			.skip(page * limit)
			.sort({ createdAt: -1 });

		const response = { data: opportunities, totalPages };

		res.status(200).json(response);
	} catch (error: any) {
		res.status(400).json({
			error: !/^[\[|\{](\s|.*|\w)*[\]|\}]$/.test(error.message)
				? error.message
				: JSON.parse(error.message),
		});
	}
});

export default router;
