import mongoose from "mongoose";

/* InvestorSchema will correspond to a collection in your MongoDB database. */
const InvestorSchema = new mongoose.Schema({
  name: {
    /* */

    type: String,
    required: [true, ""],
    maxlength: [60, ""],
  },
  cpf: {
    /* */

    type: String,
    required: [true, ""],
    maxlength: [60, ""],
  },
  rg: {
    /* */

    type: String,
    required: [true, ""],
    maxlength: [40, ""],
  },
  cnh: {
    /* */

    type: String,
  },
  birthday_date: {
    /* */

    required: [true, ""],
    type: Date,
  },
  address: {
    /* Localization address of the investor */

    type: String,
  },
  email: {
    /* */

    type: String,
    required: [true, ""],
  },
  contact_number: {
    /* */

    required: [true, ""],
    type: String,
  },
  equity_data: {
    /* */

    // TODO: what will be stored in this object?
    // Object translates to json here
    type: Object,
  },
  onchain_id: {
    /* */

    type: String,
  },
  kyc_approved: {
    /* */

    type: Boolean,
  },
  aum: {
    /* */

    type: Number,
  },
  wallet_address: {
    /* */

    type: String,
  },
  investments: {
    /* It will store the properties in which the investor has tokens */

    type: Array,
  },
});

export default mongoose.models.Investor ||
  mongoose.model("Investor", InvestorSchema);
