'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
   * Add altering commands here.
   *
   * Example:
   * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
   */
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      first_name: Sequelize.STRING,
      last_name: Sequelize.STRING,
      password: Sequelize.STRING,
      is_verified: Sequelize.BOOLEAN,
      verification_string: Sequelize.STRING,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
      is_admin: Sequelize.BOOLEAN
    });
  },
  down: async (queryInterface, Sequelize) => {
     /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('Users');
  }
};

