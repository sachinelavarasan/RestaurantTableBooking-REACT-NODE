const router = require('express').Router();

const classController = require('./user.controller');
const auth = require('../../auth/auth.service')();

// user

router.get('/hotelList', auth.authenticate, classController.getAllHotel);

router.get('/bookingList', auth.authenticate, classController.getAllBooking);

router.patch(
  '/cancel-booking/:bookingId',
  auth.authenticate,
  classController.cancelBooking
);

router.get(
  '/hotelList/:hotelId/view',
  auth.authenticate,
  classController.getHotelById
);

router.get(
  '/hotelList/:hotelId/view-comments',
  auth.authenticate,
  classController.getAllCommentsById
);

router.post(
  '/hotelList/:hotelId/add-comment',
  auth.authenticate,
  classController.addNewComment
);

router.delete(
  '/hotelList/:hotelId/delete-comment/:commentId',
  auth.authenticate,
  classController.deleteComment
);

router.get(
  '/hotelList/:hotelId/menu-offer',
  auth.authenticate,
  classController.getHotelMenuAndOfferById
);
router.get(
  '/hotelList/:hotelId/booked',
  auth.authenticate,
  classController.getHotelTableAndBookedById
);
router.post(
  '/hotelList/:hotelId/book-table',
  auth.authenticate,
  classController.bookTable
);

module.exports = router;
