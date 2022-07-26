const bookshelf = require('../../config/bookshelf');
const User = require('./user.model');

function createComments(data) {
  return new this().save(data).then((model) => model.toJSON());
}
function fetchAllComments(args) {
  return this.query((qb) => {
    qb.where(args);
    qb.select('*');
  })
    .fetchAll({
      withRelated: ['UserProfile'],
    })
    .then((model) => model.toJSON());
}

function updateComment(whereCond, updateWith) {
  return new this()
    .where(whereCond)
    .save(updateWith, { patch: true, require: false })
    .then((model) => model.toJSON());
}

module.exports = bookshelf.model(
  'Comments',
  {
    tableName: 'comments',
    idAttribute: 'comments_id',
    UserProfile() {
      return this.hasOne(User, 'user_id', 'comments_user_id');
    },
  },
  {
    createComments,
    fetchAllComments,
    updateComment,
  }
);
