const bookshelf = require('../../config/bookshelf');
const User = require('./user.model');

function createBooking(data) {
  return new this().save(data).then((model) => model.toJSON());
}
function fetchAllBooking(args) {
  return this.query((qb) => {
    qb.where(args);
    qb.orderBy('booking_created_at', 'desc');
    qb.join('users', 'user_id', 'booking_user_id');
    qb.join('hotel_tables', 'table_id', 'booking_table_id');
    qb.join('hotel_details', 'hotel_id', 'booking_hotel_id');
    qb.select('*');
  })
    .fetchAll()
    .then((model) => model.toJSON());
}

function updateBooking(whereCond, updateWith) {
  return new this()
    .where(whereCond)
    .save(updateWith, { patch: true, require: false })
    .then((model) => model.toJSON());
}

function updateBookingTime(updateWith) {
  return new this()
    .where('booking_date', '<', new Date())
    .save(updateWith, { patch: true, require: false })
    .then((model) => model.toJSON());
}

function findOne(args) {
  if (!args) throw new Error('Invalid Function Call: User.findOne');
  return this.query((qb) => {
    qb.where(args);
    qb.join('users', 'user_id', 'booking_user_id');
    qb.join('hotel_tables', 'table_id', 'booking_table_id');
    qb.select('*');
  })
    .fetch({
      require: false,
    })
    .then((model) => model && model.toJSON());
}

function findAll(args) {
  if (!args) throw new Error('Invalid Function Call: User.findOne');
  return this.query((qb) => {
    qb.where(args);
    qb.select('*');
  })
    .fetchAll({
      require: false,
    })
    .then((model) => model && model.toJSON());
}

module.exports = bookshelf.model(
  'Booking',
  {
    tableName: 'booking_table',
    idAttribute: 'booking_id',
    userProfile() {
      return this.hasOne(User, 'user_id', 'booking_user_id');
    },
  },
  {
    createBooking,
    fetchAllBooking,
    updateBooking,
    findOne,
    updateBookingTime,
    findAll,
  }
);
