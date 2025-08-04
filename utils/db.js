const { Sequelize } = require('sequelize')
const {DATABASE_URL:dbUrL}  = require('./config') 

const sequelize = new Sequelize(dbUrL, {
  dialect:'postgres',
  protocol:'postgres'
});

const connectToDB = async() => {

    try {
        await sequelize.authenticate()
        console.log('Connection successfull')
    } catch (error){

        console.log('Connection failure',error)
        return process.exit(1)

    }
    return null
}

module.exports = {
    sequelize,
    connectToDB
}