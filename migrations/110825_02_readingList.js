const { Op, DataTypes } = require("sequelize")
const { defaultValueSchemable } = require("sequelize/lib/utils")

module.exports = {
  up: async ({ context: queryInterface }) => {
    
    await queryInterface.createTable('reading_lists',{

      id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
      },
      user_id: {
        type:DataTypes.INTEGER,
        allowNull:false,
        references: {model: 'users', key:'id'}
      },
      blog_id: {
        type:DataTypes.INTEGER,
        allowNull:false,
        references: {model: 'blogs', key:'id'}
      },
      read: {
        type: DataTypes.BOOLEAN,
        default:false,
        allowNull:false
      }
    })

  },


  down:  async ({ context: queryInterface }) => {
    await queryInterface.dropTable('reading_lists')

  }
 
}
