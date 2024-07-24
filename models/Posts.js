const mongoose = require("mongoose");
const { Schema, SchemaTypes } = mongoose;

const PostSchema = new Schema({
	author: {
		type: SchemaTypes.ObjectId,
		ref: "Users",
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	likes: {
		type: Array,
		default: [],
	},
	comments: {
		type: Array,
		default: [],
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
