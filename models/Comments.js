const mongoose = require("mongoose");
const { Schema, SchemaTypes } = mongoose;

const commentSchema = new Schema({
	postId: {
		type: SchemaTypes.ObjectId,
		ref: "Posts",
		required: true,
	},
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
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
});
