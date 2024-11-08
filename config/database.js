const mongoose = require("mongoose");

async function main() {
	await mongoose.connect(process.env.MONGO_URI);
}

function connectDb() {
	main()
		.then(() => console.log("Db connected"))
		.catch((err) => console.log(err));
}

module.exports = { connectDb };
