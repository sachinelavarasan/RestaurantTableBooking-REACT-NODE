const bookshelf = require('../../config/bookshelf');
const OrgDetail = require('./orgDetail.model');

/** Find a user . will throw exception on empty records
 *  @param {object} args where cond object/is_login.
 *  @returns Promise
 */
function findOne(args) {
  if (!args) throw new Error('Invalid Function Call: User.findOne');
  return this.query((qb) => {
    if (args.is_login) {
      qb.where({ email: args.email });
    } else {
      qb.where(args);
    }
  })
    .fetch({ require: false })
    .then((model) => model.toJSON());
}

function findByCond(args) {
  if (!args) throw new Error('Invalid Function Call: User.findOne');
  return this.query((qb) => {
    qb.where(args);
  })
    .fetch({ require: false, withRelated: ['hotel'] })
    .then((model) => model && model.toJSON());
}

// wont throw exceptions on empty records.
function find(where) {
  return new this()
    .where(where)
    .fetch({ require: false })
    .then((model) => (model ? model.toJSON() : null));
}

/** Update a user .
 *  @param {object} whereCond where conditions on the update query
 *  @param {object} updateWith new data.
 *  @returns Promise
 */
function updateUser(whereCond, updateWith) {
  return new this()
    .where(whereCond)
    .save(updateWith, { patch: true })
    .then((model) => model?.toJSON());
}

/** Create a user .
 *  @param {object} data to be saved.
 *  @returns Promise
 */
function createUser(data) {
  return new this().save(data).then((model) => model.toJSON());
}

function findUser(args) {
  if (!args) throw new Error('Invalid Function Call: User.findUser');
  return this.query((qb) => {
    if (args) {
      qb.where(args);
    }
  })
    .fetch({
      withRelated: ['hotel'],
    })
    .then((model) => model.toJSON());
}

module.exports = bookshelf.model(
  'User',
  {
    tableName: 'users',
    idAttribute: 'user_id',

    hotel() {
      return this.hasOne(OrgDetail, 'hotel_user_id', 'user_id');
    },
  },
  {
    findOne,
    updateUser,
    createUser,
    find,
    findByCond,
    findUser,
  }
);
