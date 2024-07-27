const express = require("express");

const Database = require("./config/db");

const indexRoute = require("./routes/index");
const app = express();
const port = process.env.PORT || 3000;

app.use("/", indexRoute);

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
