const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const investmentSchema = mongoose.Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	name: {
		required: true,
		type: String,
		unique: 1,
		maxlength: 100,
	},
	type: {
		required: true,
		type: String,
		unique: 1,
		maxlength: 100,
	},
	value: {
		required: true,
		type: Number,
		unique: 1,
		maxlength: 100,
	},
});

const Investment = mongoose.model("Investment", investmentSchema);

module.exports = { Investment };
