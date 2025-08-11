const { Op, DataTypes } = require("sequelize")

module.exports = {
  up: async ({ context: queryInterface }) => {
    
   
  },
  down:  async ({ context: queryInterface }) => {
    await queryInterface.dropTable('migrations')

  }
 
}

