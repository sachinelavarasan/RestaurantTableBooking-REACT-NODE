const router = require('express').Router();

const hotelController = require('./hotel.controller');
const auth = require('../../auth/auth.service')();

// classes

router.get('/menuList', auth.authenticate, hotelController.getAllHotelMenu);

router.post('/addmenu', auth.authenticate, hotelController.addMenuToHotel);

router.patch(
  '/edit-menu/:menuId',
  auth.authenticate,
  hotelController.editMenuDetails
);

router.delete(
  '/removemenu/:menuId',
  auth.authenticate,
  hotelController.deleteMenu
);

router.get('/tableList', auth.authenticate, hotelController.getAllHotelTable);

router.post('/addtable', auth.authenticate, hotelController.addTableToHotel);

router.patch(
  '/edit-table/:tableId',
  auth.authenticate,
  hotelController.editTableDetails
);

router.delete(
  '/remove-table/:tableId',
  auth.authenticate,
  hotelController.deleteTable
);

router.get(
  '/hotelList/:hotelId/view',
  auth.authenticate,
  hotelController.getHotelById
);

router.get('/offersList', auth.authenticate, hotelController.getAllOffersById);

router.post('/addoffers', auth.authenticate, hotelController.addOffersToHotel);

router.patch(
  '/edit-offer/:offerId',
  auth.authenticate,
  hotelController.editOfferDetails
);

router.delete(
  '/remove-offer/:offerId',
  auth.authenticate,
  hotelController.deleteOffer
);

router.patch(
  '/end-offer/:offerId',
  auth.authenticate,
  hotelController.endOfferById
);

router.get('/bookingList', auth.authenticate, hotelController.getAllBooking);

router.patch(
  '/bookingList/:bookingId',
  auth.authenticate,
  hotelController.updateBookingById
);

router.get(
  '/comments',
  auth.authenticate,
  hotelController.getAllHotelUserCommentById
);

module.exports = router;
