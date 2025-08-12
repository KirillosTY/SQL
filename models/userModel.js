const {sequelize} = require('../utils/db')
 const {Model, DataTypes } = require('sequelize')

class userModel extends Model {}

userModel.init({
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  username: {
    type: DataTypes.TEXT,
    allowNull:false,
    unique:{ 
        msg: "Username already in use"
    },
    validate: {
    isEmail: {
        msg:"Validation isEmail on username failed"
        }
    }
  },
  password:{
    type: DataTypes.STRING(64),
   
    allowNull:false
  },
  name: {
    type: DataTypes.TEXT,
    allowNull:false
  },
  access: {
     type: DataTypes.BOOLEAN,
        toDefaultValue:true,
        allowNull:false
  }
}
 ,
  {
  sequelize,
  underscored:true,
  timestamps: true,
  modelName:'user',
  }
)



module.exports = {
    User:userModel
}