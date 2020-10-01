"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.renameTable("Users", "User");
		await queryInterface.renameTable("Rewards", "Reward");
		await queryInterface.renameTable("Tasks", "Task");
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.renameTable("User", "Users");
		await queryInterface.renameTable("Reward", "Rewards");
		await queryInterface.renameTable("Task", "Tasks");
	},
};
