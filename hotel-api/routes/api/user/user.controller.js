/* eslint-disable prefer-const */

const OrgDetailModel = require('../../models/orgDetail.model.js');
const User = require('../../models/user.model');
const HotelTables = require('../../models/hotel_tables.model');

const CommentsModel = require('../../models/comments.model');
const OffersModel = require('../../models/offers.model');
const HotelMenu = require('../../models/hotel_menu.model');
const BookingTable = require('../../models/booking-table.model');
const sendEmail = require('../../../utils/sendMail');

exports.getAllHotel = async (req, res) => {
  try {
    const allHotel = await OrgDetailModel.fetchAllHotel({ is_deleted: 0 });

    return res.status(200).json({ status: true, allHotel });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, error: error.message });
  }
};
exports.getHotelById = async (req, res) => {
  try {
    const { hotelId } = req.params;

    const hotel = await OrgDetailModel.fetchHotelById({
      hotel_id: hotelId,
      is_deleted: 0,
    });

    return res.status(200).json({ status: true, hotel });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, error: error.message });
  }
};

exports.getAllCommentsById = async (req, res) => {
  try {
    const { hotelId } = req.params;
    const allComments = await CommentsModel.fetchAllComments({
      comments_hotel_id: hotelId,
      comments_user_id: req.user.user_id,
      is_comments_deleted: 0,
    });

    return res.status(200).json({ status: true, allComments });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, error: error.message });
  }
};

exports.addNewComment = async (req, res) => {
  try {
    const { feedBack, hotelId } = req.body;
    console.log(req.body, hotelId);

    await new CommentsModel().save({
      comments_text: feedBack,
      comments_user_id: req.user.user_id,
      comments_hotel_id: hotelId,
    });
    const allComments = await CommentsModel.fetchAllComments({
      comments_hotel_id: hotelId,
      is_comments_deleted: 0,
    });

    return res.status(200).json({ status: true, allComments });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, error: error.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const { hotelId, commentId } = req.params;
    console.log(hotelId, commentId);
    await CommentsModel.updateComment(
      {
        comments_id: commentId,
        comments_hotel_id: hotelId,
      },
      {
        is_comments_deleted: 1,
      }
    );

    return res.status(200).json({ status: true, commentId });
  } catch (error) {
    return res.status(400).json({ status: false, error: error.message });
  }
};

exports.getHotelMenuAndOfferById = async (req, res) => {
  try {
    const { hotelId } = req.params;

    const allHotelMenu = await HotelMenu.fetchAllHotelMenu({
      menu_hotel_id: hotelId,
      is_menu_deleted: 0,
    });

    const allOffers = await OffersModel.fetchAllOffers({
      offers_hotel_id: hotelId,
      is_offers_deleted: 0,
    });

    return res.status(200).json({ status: true, allOffers, allHotelMenu });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, error: error.message });
  }
};
exports.getHotelTableAndBookedById = async (req, res) => {
  try {
    const { hotelId } = req.params;
    const { date, time } = req.query;
    console.log(new Date(date).toISOString().split('T')[0], time);

    const hotel = await OrgDetailModel.fetchHotelWithTable(
      {
        hotel_id: hotelId,
        is_deleted: 0,
      },
      {
        date: new Date(date).toISOString().split('T')[0],
        time: time.split(':')[0],
      }
    );

    return res.status(200).json({ status: true, hotel });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, error: error.message });
  }
};

exports.bookTable = async (req, res) => {
  try {
    const { hotelId } = req.params;
    console.log(req.body);
    const booking = await BookingTable.createBooking({
      booking_hotel_id: hotelId,
      booking_user_id: req.user.user_id,
      booking_date: new Date(req.body.bookingDate),
      booking_description: req.body.description,
      booking_table_id: req.body.tableId,
      booking_start_time: req.body.startTime,
      booking_end_time: req.body.endTime,
      phone_number: req.body.phone,
    });

    const hotel = await OrgDetailModel.find({
      hotel_id: hotelId,
    });
    const table = await HotelTables.find({
      table_id: req.body.tableId,
    });

    const user = await User.findUser({
      user_id: req.user.user_id,
    });

    const url = `<h2>Table Booking Details</h2><br><h3>${hotel.hotel_name} - ${table.table_name}</h3><br><p>Event name : ${booking.booking_description}</p></br><p>Event date : ${booking.booking_date}</p></br><p>Event time : ${booking.booking_start_time} - ${booking.booking_end_time}</p></br><p>Contact details : ${booking.phone_number}</p>`;

    await sendEmail(user.email, 'Confirmation Email', url);

    return res.status(200).json({ status: true });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, error: error.message });
  }
};

exports.getAllBooking = async (request, response) => {
  try {
    const allBooking = await BookingTable.fetchAllBooking({
      is_booking_deleted: 0,
      booking_user_id: request.user.user_id,
    });

    return response.status(200).json({ status: true, allBooking });
  } catch (error) {
    return response.status(500).json({
      error: error.message,
      status: false,
    });
  }
};
exports.cancelBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;

    await BookingTable.updateBooking(
      {
        booking_id: bookingId,
      },
      {
        is_booking_deleted: 1,
      }
    );

    return res.status(200).json({ status: true, bookingId });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, error: error.message });
  }
};
