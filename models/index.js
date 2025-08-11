
const {Blog} = require('./blogModel')
const { User } = require('./userModel')



User.hasMany(Blog)
Blog.belongsTo(User)

module.exports = {
    Blog,
    User
}
