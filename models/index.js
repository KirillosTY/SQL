
const {Blog} = require('./blogModel')
const { User } = require('./userModel')
const {Reading} = require('./readingModel')


User.hasMany(Blog)
Blog.belongsTo(User)

Blog.belongsToMany(User, {through:Reading, as:'aimed_read'})
User.belongsToMany(Blog, {through:Reading, as:'reading_aim'})


module.exports = {
    Blog,
    User,
    Reading
}
