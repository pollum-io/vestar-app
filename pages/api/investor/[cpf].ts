import { NextApiRequest, NextApiResponse } from "next/types";
import dbConnect from "../../../lib/dbConnect";
import InvestorSchema from "../../../models/investor";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { cpf },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const investor = await InvestorSchema.findOne({ cpf: cpf });
        if (!investor) {
          return res.status(400).json({
            success: false,
            message: `There is no match for ${cpf}`,
          });
        }
        res.status(200).json({ success: true, data: investor });
      } catch (error: any) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    // TODO: needs auth
    case "PUT":
      try {
        const investor = await InvestorSchema.findOneAndUpdate(
          { cpf },
          req.body,
          {
            new: true,
            runValidators: true,
          }
        );
        if (!investor) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: investor });
      } catch (error: any) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    // TODO: needs auth
    // case "DELETE":
    //   try {
    //     const deletedInvestor = await InvestorSchema.deleteOne({ cpf });
    //     if (!deletedInvestor) {
    //       return res.status(400).json({ success: false });
    //     }
    //     res.status(200).json({ success: true, data: {} });
    //   } catch (error) {
    //     res.status(400).json({ success: false });
    //   }
    //   break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
