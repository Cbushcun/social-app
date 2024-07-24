const mongoose = require("mongoose");
const { Schema, SchemaTypes } = mongoose;

const messageSchema = new Schema({
	sender: {
		type: SchemaTypes.ObjectId,
		ref: "Users",
		required: true,
	},
	receiver: {
		type: SchemaTypes.ObjectId,
		ref: "Users",
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
});
