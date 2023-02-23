import { NextApiRequest, NextApiResponse } from "next";

import dbConnect from "../../../lib/dbConnect";
import Opportunity from "../../../models/oportunity";
import { verifyUser } from "../../../lib/auth";
import { ApiResponse } from "../../../models/ApiResponse";
import nextConnect from "next-connect";

type ResponseData = ApiResponse<string[], string>;

const router = nextConnect({
  onError(error, req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    res.status(501).json({ error: `something went wrong! ${error.message}` });
  },
  onNoMatch(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

router.put(verifyUser, async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await dbConnect();

    const { id } = req.query;

    const opportunity = await Opportunity.findOneAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!opportunity) {
      return res.status(204).end("no opportunity data to update");
    }

    res.status(200).json({ data: opportunity });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
