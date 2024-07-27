const { expect } = require("chai");
require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/Users");

describe("User Model Test", () => {
	before((done) => {
		mongoose.connect(process.env.MONGO_URI);

		const db = mongoose.connection;
		db.on("error", console.error.bind(console, "connection error"));
		db.once("open", () => {
			console.log("Connected to the database...");
			done();
		});
	});

	it("Should create and save new user with default values", async () => {
		const validUser = new User({
			username: "testuser",
			name: "Test User",
			password: "password",
			email: "testuser@email.com",
			bio: "This is a test user",
		});
		const savedUser = await validUser.save();
		expect(savedUser._id).to.exist;
		expect(savedUser.username).to.equal("testuser");
		expect(savedUser.name).to.equal("Test User");
		expect(savedUser.password).to.equal("password");
		expect(savedUser.email).to.equal("testuser@email.com");
		expect(savedUser.profilePicture).to.equal(
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png?20220226140232"
		);
		expect(savedUser.bio).to.equal("This is a test user");
		expect(savedUser.followers).to.be.an("array");
		expect(savedUser.following).to.be.an("array");
		expect(savedUser.createdAt).to.exist;
	});

	after((done) => {
		mongoose.connection.db.dropDatabase((err, result) => {
			if (err) {
				console.error(err);
			} else {
				console.log("Dropped the test database...");
				mongoose.connection.close();
				done();
			}
		});
	});
});
