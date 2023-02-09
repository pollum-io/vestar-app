import dbConnect from "../../../lib/dbConnect";
import InvestorSchema from "../../../models/investor";
import { NextApiRequest, NextApiResponse } from "next/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const investors = await InvestorSchema.find({});
        res.status(200).json({ success: true, data: investors });
      } catch (error: any) {
        console.log("error", error);
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case "POST":
      try {
        const investor = await InvestorSchema.create(req.body);
        res.status(201).json({ success: true, data: investor });
      } catch (error: any) {
        console.log("error", error);
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res
        .status(400)
        .json({ success: false, error: "No response for this request" });
      break;
  }
}
