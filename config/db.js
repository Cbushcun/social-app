require("dotenv").config();
const mongoose = require("mongoose");

class Database {
	constructor() {
		this.uri = process.env.MONGO_URI;
		this.connection = null;
	}

	async connect() {
		try {
			await mongoose.connect(this.uri);
			this.connection = mongoose.connection;
			console.log("Connected to the database...");
		} catch (err) {
			console.error(err);
			throw err;
		}
	}

	async close() {
		try {
			await mongoose.connection.close();
			console.log("Closed the database connection...");
		} catch (err) {
			console.error(err);
			throw err;
		}
	}

	async drop() {
		try {
			await mongoose.connection.dropDatabase();
			console.log("Dropped the database...");
		} catch (err) {
			console.error(err);
			throw err;
		}
	}
}

module.exports = Database;
