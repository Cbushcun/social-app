import React from "react";

const LoginUser = async (formData: FormData) => {
	const email = formData.get("email");
	const password = formData.get("password");

	// Perform login logic here
	// For example, send a request to your backend API to authenticate the user

	// Return a response or redirect as needed
	return {
		message: "User logged in successfully",
		email,
	};
};
