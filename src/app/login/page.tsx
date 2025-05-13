"use client";
import React, { useState } from "react";

const LoginPage: React.FC = () => {
	const formData = new FormData();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		formData.append("email", email);
		formData.append("password", password);
		// Add login logic here
	};

	return (
		<div>
			<h1>Login Page</h1>
			<form onSubmit={handleSubmit}>
				<span>
					<label>Email:</label>
					<input type="email" value={email} onChange={handleEmailChange} />
				</span>
				<span>
					<label>Password:</label>
					<input
						type="password"
						value={password}
						onChange={handlePasswordChange}
					/>
				</span>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default LoginPage;
