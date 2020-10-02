"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn("Task", "UserId", {
			type: Sequelize.INTEGER,
			references: { model: "User", key: "id" },
			onUpdate: "CASCADE",
			onDelete: "SET NULL",
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn("Task", "UserId");
	},
};
