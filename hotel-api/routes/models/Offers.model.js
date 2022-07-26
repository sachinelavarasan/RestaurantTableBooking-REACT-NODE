const bookshelf = require('../../config/bookshelf');
const User = require('./user.model');

function createOffers(data) {
  return new this().save(data).then((model) => model.toJSON());
}
function fetchAllOffers(args) {
  return this.query((qb) => {
    qb.where(args);
    qb.select('*');
  })
    .fetchAll({
      withRelated: ['UserProfile'],
    })
    .then((model) => model.toJSON());
}

function updateOffers(whereCond, updateWith) {
  return new this()
    .where(whereCond)
    .save(updateWith, { patch: true, require: false })
    .then((model) => model.toJSON());
}

function findOne(args) {
  if (!args) throw new Error('Invalid Function Call: User.findOne');
  return this.query((qb) => {
    qb.where(args);
  })
    .fetch({
      require: false,
      withRelated: ['UserProfile'],
    })
    .then((model) => model && model.toJSON());
}

function updateOfferTime(updateWith) {
  return new this()
    .where('offers_finished_at', '<', new Date())
    .save(updateWith, { patch: true, require: false })
    .then((model) => model.toJSON());
}

module.exports = bookshelf.model(
  'Offers',
  {
    tableName: 'offers',
    idAttribute: 'offers_id',
    UserProfile() {
      return this.hasOne(User, 'user_id', 'offers_user_id');
    },
  },
  {
    createOffers,
    fetchAllOffers,
    updateOffers,
    findOne,
    updateOfferTime,
  }
);
