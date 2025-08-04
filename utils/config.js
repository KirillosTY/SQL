require('dotenv').config()

const PORT = process.env.PORT || 3001

module.exports = {

    DATABASE_URL : process.env.DATABASE_URL,
    PORT: PORT
}