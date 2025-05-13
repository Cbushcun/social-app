"use client";
import React, { useState } from "react";

const RegisterPage: React.FC = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value);
	};

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const handleConfirmPasswordChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setConfirmPassword(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent) => {
		const formData = new FormData();
		e.preventDefault();
		formData.append("username", username);
		formData.append("email", email);
		formData.append("password", password);
		// Add login logic here
	};

	return (
		<div>
			<h1>Login Page</h1>
			<form onSubmit={handleSubmit}>
				<span>
					<label>Username:</label>
					<input type="text" value={username} onChange={handleUsernameChange} />
				</span>
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
				<span>
					<label>Confirm Password:</label>
					<input
						type="password"
						value={confirmPassword}
						onChange={handleConfirmPasswordChange}
					/>
				</span>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default RegisterPage;
