const bookshelf = require('../../config/bookshelf');

function fetchAllMenuType() {
  return this.query((qb) => {
    qb.select('*');
  })
    .fetchAll()
    .then((model) => model.toJSON());
}

module.exports = bookshelf.model(
  'MenuType',
  {
    tableName: 'menu_type',
    idAttribute: 'menu_type_id',
  },
  {
    fetchAllMenuType,
  }
);
