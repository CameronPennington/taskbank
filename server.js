const { Sequelize } = require("sequelize");
const express = require("express");
const app = express();

const sequelize = new Sequelize(
	"postgres://postgres:postgres@localhost:5432/testdb"
);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

const checkDB = async () => {
	try {
		await sequelize.authenticate();
		console.log("Db connected");
		await sequelize.sync();
	} catch (error) {
		console.log("Unable to connect to DB ", error);
	}
};
checkDB();

app.listen(3000, () => {
	console.log("listening");
});
