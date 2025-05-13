import React from "react";

const HomePage: React.FC = () => {
	return (
		<div>
			<div>
				<a href="/login">Login</a> | <a href="/register">Register</a>
			</div>
			<div>
				<a href="/create-post">Create Post</a> |{" "}
				<a href="/view-posts">View Posts</a> |{" "}
				<a href="/delete-post">Delete Post</a> |{" "}
				<a href="/view-profile">View Profile</a> |{" "}
				<a href="/messages">Messages</a> |{" "}
				<a href="/notifications">Notifications</a> |{" "}
			</div>
		</div>
	);
};

export default HomePage;
