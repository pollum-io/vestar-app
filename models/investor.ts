import mongoose from "mongoose";

/* InvestorSchema will correspond to a collection in your MongoDB database. */
const InvestorSchema = new mongoose.Schema(
	{
		full_name: {
			type: String,
		},
		mother_name: {
			type: String,
		},
		cpf: {
			type: String,
		},
		rg: {
			type: String,
		},
		cnh: {
			type: String,
		},
		profession: {
			type: String,
		},
		address: {
			type: Object,
		},
		wallet_address: {
			type: String,
		},
		marital_status: {
			type: Object,
		},
		phone_number: {
			type: String,
		},
		cnpj: {
			type: String,
		},
		email: {
			type: String,
		},
		birthday_date: {
			type: String,
		},
		birthday_city: {
			type: String,
		},
		uf: {
			type: String,
		},
		is_legal_entity: {
			type: Boolean,
		},
		invited_by: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.models.Investor ||
	mongoose.model("Investor", InvestorSchema);
