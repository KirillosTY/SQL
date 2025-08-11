const { Op, DataTypes } = require("sequelize")
const { defaultValueSchemable } = require("sequelize/lib/utils")

module.exports = {
  up: async ({ context: queryInterface }) => {
    
    await queryInterface.addColumn('blogs', 'year', {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:2000,
    },)
  },
  down:  async ({ context: queryInterface }) => {
    await queryInterface.removeColumn('blogs', 'year')

  }
 
}

