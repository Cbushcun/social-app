import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<html>
			<body>
				<div>
					<h1>Welcome to the Social App!</h1>
					{children}
				</div>
			</body>
		</html>
	);
};

export default Layout;
