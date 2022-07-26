const bookshelf = require('../../config/bookshelf');
const User = require('./user.model');
const Booking = require('./booking-table.model');

function createHotelTables(data) {
  return new this().save(data).then((model) => model.toJSON());
}

function updateHotelTables(whereCond, updateWith) {
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

function fetchAllHotelTables(args) {
  if (!args) throw new Error('Invalid Function Call: Org.findOne');
  return this.query((queryBuilder) => {
    queryBuilder.where(args);
    queryBuilder.join('users', 'user_id', 'table_user_id');
    queryBuilder.join('hotel_details', 'hotel_id', 'table_hotel_id');
    queryBuilder.select('*');
  })
    .fetchAll()
    .then((model) => model.toJSON());
}
function fetchHotelTablesById(args) {
  if (!args) throw new Error('Invalid Function Call: Org.findOne');
  return this.query((queryBuilder) => {
    queryBuilder.where(args);
    queryBuilder.join('users', 'user_id', 'table_user_id');
    queryBuilder.join('hotel_details', 'hotel_id', 'table_hotel_id');
    queryBuilder.select('*');
  })
    .fetch()
    .then((model) => model.toJSON());
}

module.exports = bookshelf.model(
  'HotelTables',
  {
    tableName: 'hotel_tables',
    idAttribute: 'table_id',
    hotel() {
      return this.hasOne(User, 'user_id', 'menu_user_id');
    },
    booked() {
      return this.hasMany(Booking, 'booking_table_id', 'table_id');
    },
  },
  {
    createHotelTables,
    find,
    updateHotelTables,
    fetchAllHotelTables,
    fetchHotelTablesById,
  }
);
