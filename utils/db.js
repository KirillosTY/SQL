const  Sequelize  = require('sequelize')
const {DATABASE_URL:dbUrL}  = require('./config') 
const {Umzug, SequelizeStorage} = require('umzug')

const sequelize = new Sequelize(dbUrL, {
  dialect:'postgres',
  protocol:'postgres'
});

const migConf = {
    
        migrations: {
            glob: 'migrations/*.js',
        },
        storage: new SequelizeStorage({sequelize, tableName:'migrations'}),
        context: sequelize.getQueryInterface(),
        logger:console
}

const insertConf = {
      migrations: {
            glob: 'utils/insertDefaults.js',
        },
        storage: new SequelizeStorage({sequelize, tableName:'seeders'}),
        context: sequelize.getQueryInterface(),
        logger:console
}

const runMigrations = async() => {
    const migrator = new Umzug(migConf)
    const migrations = await migrator.up()
    const migInsert = new Umzug(insertConf)
    const migInserts= await migInsert.up()
    console.log('Migrations are up',{
        files:migrations.map((m) => m.name),
        fileInserts:migInserts.map((m) => m.name)
    } )
}



const connectToDB = async() => {

    try {

        await sequelize.authenticate()
        await runMigrations()
        console.log('Connection successfull')
    } catch (error){

        console.log('Connection failure',error)
        return process.exit(1)

    }
    return null
}

const rollBackMigs = async() => {
    await sequelize.authenticate()
    const migrator = new Umzug(migConf)
    
    const migrations = await migrator.down({to:0})
     console.log('Migrations are down',{
        files:migrations.map((m) => m.name)
    } )
}



module.exports = {
    sequelize,
    connectToDB,
    rollBackMigs
}