const {sequelize} = require('../utils/db')
 const {Model, DataTypes, Op } = require('sequelize')


class ReadingListModal extends Model{}


ReadingListModal.init({
     id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
      },
      userId: {
        type:DataTypes.INTEGER,
        allowNull:false,
        references: {model: 'users', key:'id'}
      },
      blogId: {
        type:DataTypes.INTEGER,
        allowNull:false,
        references: {model: 'blogs', key:'id'}
      },
      read: {
        type: DataTypes.BOOLEAN,
        default:false,
        allowNull:false
      }
    },
      {
        sequelize,
        underscored:true, 
        timestamps: false,
        modelName:'reading_lists',
        }
 )

module.exports = {
    Reading:ReadingListModal
}