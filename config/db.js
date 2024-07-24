require("dotenv").config();
const mongoose = require("mongoose");

async function connectDB() {
	await mongoose.connect(process.env.MONGO_URI);
}

connectDB().catch(console.log(err));
