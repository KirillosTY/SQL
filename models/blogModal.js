const {sequelize} = require('../utils/db')
 const {Model, DataTypes } = require('sequelize')

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
  }
}
 ,
  {
  sequelize,
  underscored:true,
  timestamps: true,
  modelName:'blog'
  }
)



module.exports = {
    Blog:BlogModal
}