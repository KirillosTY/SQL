
const {Blog} = require('./blogModel')
const { User } = require('./userModel')
const {Reading} = require('./readingModel')
const {Access} = require('./accessModel')


User.hasMany(Blog)
Blog.belongsTo(User)


Blog.belongsToMany(User, {through:Reading, as:'aimed_read'})
User.belongsToMany(Blog, {through:Reading, as:'reading_aim'})

User.hasOne(Access)
Access.belongsTo(User)




module.exports = {
    Blog,
    User,
    Reading
}
