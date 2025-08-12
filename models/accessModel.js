const {sequelize} = require('../utils/db')
 const {Model, DataTypes } = require('sequelize')

class AccessModel extends Model {}

AccessModel.init({

      user_id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        references: {model: 'users', key:'id'},
        unique:true
      },
      accessToken: {
        type: DataTypes.INTEGER,
        toDefaultValue:0,
        allowNull:false,
        unique:true
      }
    }

 ,
  {
  sequelize,
  underscored:true,
  timestamps: true,
  modelName:'active_sessions',
  }
)



module.exports = {
    Access:AccessModel
}