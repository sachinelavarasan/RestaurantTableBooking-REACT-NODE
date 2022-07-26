const bookshelf = require('../../config/bookshelf');
const User = require('./user.model');

function createHotelMenu(data) {
  return new this().save(data).then((model) => model.toJSON());
}

function updateHotelMenu(whereCond, updateWith) {
  return new this()
    .where(whereCond)
    .save(updateWith, { patch: true, require: false })
    .then((model) => model.toJSON());
}

function find(query) {
  if (!query) {
    throw new Error('Invalid function call');
  }

  return this.query((queryBuilder) => {
    queryBuilder.where(query);
  })
    .fetch({
      require: false,
    })
    .then((model) => model && model.toJSON());
}

function fetchAllHotelMenu(args) {
  if (!args) throw new Error('Invalid Function Call: Org.findOne');
  return this.query((queryBuilder) => {
    queryBuilder.where(args);
    queryBuilder.join('users', 'user_id', 'menu_user_id');
    queryBuilder.join('menu_type', 'menu_type_id', 'menu_type');
    queryBuilder.select('*');
  })
    .fetchAll()
    .then((model) => model.toJSON());
}
function fetchHotelMenuById(args) {
  if (!args) throw new Error('Invalid Function Call: Org.findOne');
  return this.query((queryBuilder) => {
    queryBuilder.where(args);
    queryBuilder.join('users', 'user_id', 'menu_user_id');
    queryBuilder.select('*');
  })
    .fetch()
    .then((model) => model.toJSON());
}

module.exports = bookshelf.model(
  'HotelMenu',
  {
    tableName: 'hotel_menu',
    idAttribute: 'menu_id',
    hotelOwner() {
      return this.hasOne(User, 'user_id', 'menu_user_id');
    },
  },
  {
    createHotelMenu,
    find,
    updateHotelMenu,
    fetchAllHotelMenu,
    fetchHotelMenuById,
  }
);
