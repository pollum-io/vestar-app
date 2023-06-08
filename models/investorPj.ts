import mongoose from "mongoose";

/* InvestorSchema will correspond to a collection in your MongoDB database. */
const InvestorSchema = new mongoose.Schema(
	{
		full_name: {
			type: String,
			required: true,
			maxlength: 60,
		},
		cnpj: {
			type: String,
			required: true,
			maxlength: 14,
		},
		uf: {
			type: String,
			required: true,
		},
		email: {
			type: String,
		},
		contact_number: {
			type: String,
		},
		address: {
			type: Object,
		},
		legal_representatives: {
			type: Array,
		},
		partners: {
			type: Array,
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
