import mongoose from "mongoose";

/* EnterpriseSchema will correspond to a collection in your MongoDB database. */
const EnterpriseSchema = new mongoose.Schema(
	{
		enterprise_name: {
			type: String,
			required: true,
			maxlength: 60,
		},
		enterprise_logo: {
			type: String,
		},
		cnpj: {
			type: String,
			required: true,
			maxlength: 14,
		},
		site_url: {
			type: String,
			required: true,
			maxlength: 40,
		},
		email: {
			type: String,
			required: true,
		},
		contact_number: {
			required: true,
			type: String,
		},
		social_media: {
			type: Object,
		},
		description: {
			required: true,
			type: String,
		},
		address: {
			type: Object,
		},
		team: {
			type: Array,
		},
		enterprise_info: {
			type: Object,
		},
		kyc_approved: {
			type: Boolean,
		},
		aum: {
			type: Number,
		},
		wallet_address: {
			type: String,
		},
		investments: {
			type: Array,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.models.Enterprise ||
	mongoose.model("Enterprise", EnterpriseSchema);
