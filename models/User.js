const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
	"postgres://postgres:postgres@localhost:5432/testdb"
);

const User = sequelize.define("User", {
	firstName: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	lastName: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

module.exports = User;
