const bookshelf = require('../../config/bookshelf');
const User = require('./user.model');
const HotelTable = require('./hotel_tables.model');

function createHotel(data) {
  return new this().save(data).then((model) => model.toJSON());
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

function fetchAllHotel(args) {
  if (!args) throw new Error('Invalid Function Call: Org.findOne');
  return this.query((queryBuilder) => {
    queryBuilder.where(args);
    queryBuilder.join('users', 'user_id', 'hotel_user_id');
    queryBuilder.select('*');
  })
    .fetchAll()
    .then((model) => model.toJSON());
}
function fetchHotelById(args) {
  if (!args) throw new Error('Invalid Function Call: Org.findOne');
  return this.query((queryBuilder) => {
    queryBuilder.where(args);
    queryBuilder.join('users', 'user_id', 'hotel_user_id');
    queryBuilder.select('*');
  })
    .fetch({
      withRelated: [
        {
          hotelTables: (queryBuilder) => {
            queryBuilder.where({
              is_table_deleted: 0,
            });
            queryBuilder.column('*');
          },
        },
      ],
    })
    .then((model) => model.toJSON());
}
function fetchHotelWithTable(args, args1) {
  if (!args) throw new Error('Invalid Function Call: Org.findOne');
  return this.query((queryBuilder) => {
    queryBuilder.where(args);
    queryBuilder.join('users', 'user_id', 'hotel_user_id');
    queryBuilder.select('*');
  })
    .fetch({
      withRelated: [
        {
          hotelTables: (queryBuilder) => {
            queryBuilder.where({
              is_table_deleted: 0,
            });
            queryBuilder.column('*');
          },
          'hotelTables.booked': (queryBuilder) => {
            queryBuilder.where({
              booking_date: args1.date,
              is_booking_finished: 0,
              is_booking_deleted: 0,
            });
            queryBuilder.whereRaw(
              'booking_start_time like ? or booking_end_time like ?',
              [`%${args1.time}%`, `%${args1.time}%`]
            );
            queryBuilder.column('*');
          },
        },
      ],
    })
    .then((model) => model.toJSON());
}

module.exports = bookshelf.model(
  'Hoteldetail',
  {
    tableName: 'hotel_details',
    idAttribute: 'hotel_id',
    hotelTables() {
      return this.hasMany(HotelTable, 'table_hotel_id', 'hotel_id');
    },
  },
  {
    createHotel,
    find,
    fetchHotelWithTable,
    fetchAllHotel,
    fetchHotelById,
  }
);
