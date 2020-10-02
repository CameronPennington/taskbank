"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn("Reward", "UserId", {
			type: Sequelize.INTEGER,
			references: { model: "User", key: "id" },
			onUpdate: "CASCADE",
			onDelete: "SET NULL",
			autoIncrement: true,
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn("Task", "UserId");
	},
};
