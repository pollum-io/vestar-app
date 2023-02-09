import mongoose from "mongoose";

/* EnterpriseSchema will correspond to a collection in your MongoDB database. */
const EnterpriseSchema = new mongoose.Schema({
  name: {
    /* */

    type: String,
    required: [true, ""],
    maxlength: [60, ""],
  },
  address: {
    /* Localization of the enterprise */

    type: String,
  },
  min_investment: {
    /* */

    type: Number,
    required: [true, ""],
  },
  init_date: {
    /* The date the construction started */

    type: Date,
    required: [true, ""],
  },
  expected_delivery_date: {
    /* */

    type: Date,
    required: [true, ""],
  },
  end_date: {
    /* */

    type: Date,
    required: [true, ""],
  },
  profitability: {
    /* */

    required: [true, ""],
    type: Number,
  },
  cub_current: {
    /* */

    type: Number,
  },
  cub_expected: {
    /* */

    required: [true, ""],
    type: Number,
  },
  description: {
    /* Description of the enterprise */

    // TODO: what will be stored in this object?
    // Object translates to json here
    type: String,
  },
  general_info: {
    /* */

    type: Object,
  },
  event_ensuing: {
    /* This will contain the data about the events that occurred during the development of the enterprise */

    type: Object,
  },
  neighbor_description: {
    /* */

    type: String,
  },
  pictures_neighbor: {
    /* */

    type: Array,
  },
  pictures_enterprise: {
    /* */

    type: Array,
  },
  token_address: {
    /* */

    type: String,
  },
  enterprise_type: {
    /* */

    type: Array,
  },
  description_extra: {
    /* */

    type: String,
  },
  picture_extra: {
    /* */

    type: Array,
  },
});

export default mongoose.models.Enterprise ||
  mongoose.model("Enterprise", EnterpriseSchema);
