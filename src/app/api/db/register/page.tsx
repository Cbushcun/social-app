import React from "react";

const RegisterUser = async (formData: FormData) => {
	const username = formData.get("username");
	const email = formData.get("email");
	const password = formData.get("password");
	const confirmPassword = formData.get("confirmPassword");

	// Perform registration logic here
	// For example, send a request to your backend API to register the user

	// Return a response or redirect as needed
	return {
		message: "User registered successfully",
		username,
		email,
	};
};
