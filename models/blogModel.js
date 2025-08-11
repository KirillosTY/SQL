const {sequelize} = require('../utils/db')
 const {Model, DataTypes, Op } = require('sequelize')

class BlogModal extends Model {}

BlogModal.init({
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  author: {
    type: DataTypes.TEXT,

  },
  title:{
    type: DataTypes.TEXT,
    allowNull:false
  },
  url: {
    type:DataTypes.TEXT,
    allowNull:false
  },
  likes: {
    type:DataTypes.INTEGER,
    allowNull:false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue:2000,
    validate: {
      max: {args: new Date().getFullYear(),
        msg:"Can not be in the future"
      },
      min: {args: 1991,
        msg:"Can not be before 1991"
      },
    }
  }
}
 ,
  {
  sequelize,
  underscored:true,
  timestamps: true,
  modelName:'blog',
  
  }
)



module.exports = {
    Blog:BlogModal
}