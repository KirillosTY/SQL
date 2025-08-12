const { Op, DataTypes } = require("sequelize")
const { defaultValueSchemable, toDefaultValue } = require("sequelize/lib/utils")

module.exports = {
  up: async ({ context: queryInterface }) => {
    
    await queryInterface.addColumn('users','access',{

        type: DataTypes.BOOLEAN,
        toDefaultValue:true,
        allowNull:false,
      
    })

    await queryInterface.createTable('active_sessions', {

       id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
      },
      user_id: {
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:true,
        references: {model: 'users', key:'id'}
      },
      access_token: {
        type: DataTypes.STRING,
        toDefaultValue:0,
        allowNull:false
      },
      created_at: {
        type:DataTypes.DATE,
        allowNull:false

      },
      updated_at: {
        type:DataTypes.DATE,
        allowNull:false

      }
})
  },


  down:  async ({ context: queryInterface }) => {
    await queryInterface.dropTable('active_sessions')
    await queryInterface.removeColumn('users','access')

  }
 
}
