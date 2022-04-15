'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      movieName: {
        type: DataTypes.STRING
      },
      moveReview: {
        type: DataTypes.STRING
      },
      avatar: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('movies');
  }
};