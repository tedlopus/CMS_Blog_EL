const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

User.hasMany(bLOG, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Project.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Blog, Comment }