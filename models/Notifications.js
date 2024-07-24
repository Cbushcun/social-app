const mongoose = require("mongoose");
const { Schema, SchemaTypes } = mongoose;

const notificationSchema = new Schema({
	userId: {
		type: SchemaTypes.ObjectId,
		ref: "Users",
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	details: {
		type: String,
		required: true,
	},
	read: {
		type: Boolean,
		default: false,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});
