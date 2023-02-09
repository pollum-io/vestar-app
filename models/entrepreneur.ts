import mongoose from "mongoose";

/* EntrepreneurSchema will correspond to a collection in your MongoDB database. */
const EntrepreneurSchema = new mongoose.Schema({
  enterprise_name: {
    /* */

    type: String,
    required: [true, ""],
    maxlength: [60, ""],
  },
  cnpj: {
    /* */

    type: String,
    required: [true, ""],
    maxlength: [60, ""],
  },
  site_url: {
    /* */

    type: String,
    required: [true, ""],
    maxlength: [40, ""],
  },
  email: {
    /* */

    type: String,
    required: [true, ""],
  },
  contact_number: {
    /* */

    required: [true, ""],
    type: Number,
  },
  social_media: {
    /* Optional: Instagram, Twitter, Facebook, LinkedIn */

    type: Array,
  },
  description: {
    /* */

    required: [true, ""],
    type: String,
  },
  address: {
    /* */

    type: String,
  },
  team: {
    /* */

    // TODO: what will be stored in this object?
    // Object translates to json here
    type: Object,
  },
  enterprise_info: {
    /* */

    type: Object,
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
    /* It will store the properties in which the Entrepreneur has tokens */

    type: Array,
  },
});

export default mongoose.models.Entrepreneur ||
  mongoose.model("Entrepreneur", EntrepreneurSchema);
