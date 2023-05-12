import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { z } from "zod";

import dbConnect from "../../../lib/dbConnect";
import RecoverPassword from "../../../models/recoverPassword";
import { ApiResponse } from "../../../models/ApiResponse";
import Investor from "../../../models/investor";
import Enterprise from "../../../models/enterprise";
import { v4 as uuidv4 } from "uuid";
import nodemailer from "nodemailer";

type ResponseData = ApiResponse<string>;

const router = nextConnect({
	onError(error, req: NextApiRequest, res: NextApiResponse<ResponseData>) {
		res.status(501).json({ error: `something went wrong! ${error.message}` });
	},
	onNoMatch(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
		res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
	},
});

const RecoverPasswordSchema = z.object({
	email: z.string().max(60),
});

router.post(async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
	try {
		await dbConnect();

		const { email } = req.body;

		const validatedData = RecoverPasswordSchema.parse({
			email,
		});

		const investor = await Investor.findOne({
			email: validatedData.email,
		});

		if (investor) {
			await RecoverPassword.deleteMany({ email: investor.email });

			const code = uuidv4();

			const recoverPassword = new RecoverPassword({
				email: validatedData.email,
				code,
				expirationDate: new Date(Date.now() + 30 * 60 * 1000), // 30 minutos
			});

			await recoverPassword.save();

			// const link = `https://livin.app/recoverPassword?code=${code}`;

			// // Configurar o transporte do nodemailer
			// const transporter = nodemailer.createTransport({
			// 	// Configurações do seu provedor de email
			// 	//
			// 	// host: "smtp.ethereal.email",
			// 	// port: 587,
			// 	// secure: false, // true for 465, false for other ports
			// 	// auth: {
			// 	// 	user: testAccount.user, // generated ethereal user
			// 	// 	pass: testAccount.pass, // generated ethereal password
			// 	// },
			// 	//
			// });

			// // Configurar o email a ser enviado
			// const mailOptions = {
			// 	from: "your-email@example.com",
			// 	to: investorEmail,
			// 	subject: "Recuperação de senha",
			// 	text: `Olá! Clique no link a seguir para redefinir sua senha: ${link}`,
			// };

			// // Enviar o email
			// transporter.sendMail(mailOptions, (error, info) => {
			// 	if (error) {
			// 		console.log("Error sending email:", error);
			// 	} else {
			// 		console.log("Email sent:", info.response);
			// 	}
			// });

			return res.status(200);
		}

		const enterprise = await Enterprise.findOne({
			email: validatedData.email,
		});

		if (enterprise) {
			await RecoverPassword.deleteMany({ email: enterprise.email });

			const code = uuidv4();

			const recoverPassword = new RecoverPassword({
				email: validatedData.email,
				code,
				expirationDate: new Date(Date.now() + 30 * 60 * 1000),
			});

			await recoverPassword.save();

			// const link = `https://livin.app/recoverPassword?code=${code}`;

			// // Configurar o transporte do nodemailer
			// const transporter = nodemailer.createTransport({
			// 	// Configurações do seu provedor de email
			// 	// ...
			// });

			// // Configurar o email a ser enviado
			// const mailOptions = {
			// 	from: "your-email@example.com",
			// 	to: investorEmail,
			// 	subject: "Recuperação de senha",
			// 	text: `Olá! Clique no link a seguir para redefinir sua senha: ${link}`,
			// };

			// // Enviar o email
			// transporter.sendMail(mailOptions, (error, info) => {
			// 	if (error) {
			// 		console.log("Error sending email:", error);
			// 	} else {
			// 		console.log("Email sent:", info.response);
			// 	}
			// });

			return res.status(200);
		}

		return res.status(200).end();
	} catch (error) {
		return res.status(501).json({ error: `Something went wrong! ${error}` });
	}
});

export default router;
