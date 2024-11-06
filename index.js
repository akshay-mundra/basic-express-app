const express = require("express");
const { connectDb } = require("./config/database.js");
const app = express();
const PORT = process.env.PORT || 3000;

connectDb();

app.use(express.json());

app.get("/health-check", (req, res) => {
	res.status(200).json({ message: "Health Check Successful" });
});

app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});
