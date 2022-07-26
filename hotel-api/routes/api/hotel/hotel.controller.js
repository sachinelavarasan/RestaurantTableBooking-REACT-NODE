/* eslint-disable prefer-const */
const uuidv4 = require('uuid/v4');

const OrgDetailModel = require('../../models/orgDetail.model.js');

const HotelMenu = require('../../models/hotel_menu.model');
const HotelTables = require('../../models/hotel_tables.model');
const HotelMenuType = require('../../models/menu_type.model');

const OffersModel = require('../../models/offers.model');
const BookingTable = require('../../models/booking-table.model');

const CommentsModel = require('../../models/comments.model');

exports.getAllHotelMenu = async (req, res) => {
  try {
    const { hotel_id: hotelId } = req.user.hotel;
    const allHotelMenu = await HotelMenu.fetchAllHotelMenu({
      menu_hotel_id: hotelId,
      is_menu_deleted: 0,
    });
    const allMenuType = await HotelMenuType.fetchAllMenuType({
      menu_hotel_id: hotelId,
      is_menu_deleted: 0,
    });

    return res.status(200).json({ status: true, allHotelMenu, allMenuType });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, error: error.message });
  }
};

exports.addMenuToHotel = async (req, res) => {
  try {
    const { hotel_id: hotelId } = req.user.hotel;
    console.log(req.body);
    const data = req.body;

    const addItemPromises = data.map((item) => {
      return new HotelMenu().save({
        menu_type: item.menuType.value,
        menu_name: item.foodName,
        menu_hotel_id: hotelId,
        menu_user_id: req.user.user_id,
      });
    });

    await Promise.all(addItemPromises);

    const allHotelMenu = await HotelMenu.fetchAllHotelMenu({
      menu_hotel_id: hotelId,
      is_menu_deleted: 0,
    });

    return res.status(200).json({ status: true, allHotelMenu });
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

exports.editMenuDetails = async (req, res) => {
  try {
    const { menuId } = req.params;
    const { hotel_id: hotelId } = req.user.hotel;
    await HotelMenu.updateHotelMenu(
      {
        menu_id: menuId,
      },
      {
        menu_type: Number(req.body.menuType),
        menu_name: req.body.foodName,
      }
    );

    const allHotelMenu = await HotelMenu.fetchAllHotelMenu({
      menu_hotel_id: hotelId,
      is_menu_deleted: 0,
    });

    return res.status(200).json({ status: true, allHotelMenu });
  } catch (error) {
    return res.status(400).json({ status: false, error: error.message });
  }
};

exports.deleteMenu = async (req, res) => {
  try {
    const { menuId } = req.params;
    const { hotel_id: hotelId } = req.user.hotel;

    await HotelMenu.updateHotelMenu(
      {
        menu_hotel_id: hotelId,
        menu_id: menuId,
      },
      {
        is_menu_deleted: 1,
      }
    );

    return res.status(200).json({ status: true, menuId });
  } catch (error) {
    return res.status(400).json({ status: false, error: error.message });
  }
};

exports.getAllHotelTable = async (req, res) => {
  try {
    const { hotel_id: hotelId } = req.user.hotel;
    const allHotelTables = await HotelTables.fetchAllHotelTables({
      table_hotel_id: hotelId,
      is_table_deleted: 0,
    });
    const tableBookingCount = await Promise.all(
      allHotelTables?.map((item) => {
        return BookingTable.findAll({
          booking_table_id: item?.table_id,
          is_booking_finished: 0,
          is_booking_deleted: 0,
        });
      })
    );
    allHotelTables?.map((item, index) => {
      allHotelTables[index].tableBookedCount = tableBookingCount[index]?.length;
    });

    return res.status(200).json({ status: true, allHotelTables });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, error: error.message });
  }
};

exports.addTableToHotel = async (req, res) => {
  try {
    const { hotel_id: hotelId } = req.user.hotel;
    console.log(req.body);
    const data = req.body;

    const addItemPromises = data.map((item) => {
      return new HotelTables().save({
        table_id: uuidv4(),
        table_seat_count: Number(item.seatCount),
        table_name: item.tableName,
        table_hotel_id: hotelId,
        table_user_id: req.user.user_id,
      });
    });

    await Promise.all(addItemPromises);

    const allHotelTables = await HotelTables.fetchAllHotelTables({
      table_hotel_id: hotelId,
      is_table_deleted: 0,
    });

    return res.status(200).json({ status: true, allHotelTables });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, error: error.message });
  }
};

exports.editTableDetails = async (req, res) => {
  try {
    const { tableId } = req.params;
    const { hotel_id: hotelId } = req.user.hotel;
    await HotelTables.updateHotelTables(
      {
        table_id: tableId,
        table_hotel_id: hotelId,
      },
      {
        table_seat_count: Number(req.body.seatCount),
        table_name: req.body.tableName,
      }
    );

    const hotelTable = await HotelTables.fetchHotelTablesById({
      table_id: tableId,
      is_table_deleted: 0,
    });

    return res.status(200).json({ status: true, hotelTable });
  } catch (error) {
    return res.status(400).json({ status: false, error: error.message });
  }
};

exports.deleteTable = async (req, res) => {
  try {
    const { tableId } = req.params;
    const { hotel_id: hotelId } = req.user.hotel;

    await HotelTables.updateHotelTables(
      {
        table_hotel_id: hotelId,
        table_id: tableId,
      },
      {
        is_table_deleted: 1,
      }
    );

    return res.status(200).json({ status: true, tableId });
  } catch (error) {
    return res.status(400).json({ status: false, error: error.message });
  }
};

exports.getAllOffersById = async (req, res) => {
  try {
    const { hotel_id: hotelId } = req.user.hotel;

    await OffersModel.updateOfferTime({
      is_offers_finished: 1,
      offers_hotel_id: hotelId,
    });
    const allOffers = await OffersModel.fetchAllOffers({
      offers_hotel_id: hotelId,
      offers_user_id: req.user.user_id,
      is_offers_deleted: 0,
    });

    return res.status(200).json({ status: true, allOffers });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, error: error.message });
  }
};

exports.addOffersToHotel = async (req, res) => {
  try {
    const { hotel_id: hotelId } = req.user.hotel;
    console.log(req.body);
    await OffersModel.createOffers({
      offers_hotel_id: hotelId,
      offers_user_id: req.user.user_id,
      offers_started_at: new Date(req.body.startDate),
      offers_finished_at: new Date(req.body.endDate),
      offers_description: req.body.description,
      offer_image_url: req.body.imgLoca,
    });

    const allOffers = await OffersModel.fetchAllOffers({
      offers_hotel_id: hotelId,
      offers_user_id: req.user.user_id,
      is_offers_deleted: 0,
    });

    return res.status(200).json({ status: true, allOffers });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, error: error.message });
  }
};

exports.editOfferDetails = async (req, res) => {
  try {
    const { offerId } = req.params;
    const { hotel_id: hotelId } = req.user.hotel;
    await OffersModel.updateOffers(
      {
        offers_id: offerId,
      },
      {
        offers_started_at: new Date(req.body.startDate),
        offers_finished_at: new Date(req.body.endDate),
        offers_description: req.body.description,
      }
    );

    const allOffers = await OffersModel.fetchAllOffers({
      offers_hotel_id: hotelId,
      offers_user_id: req.user.user_id,
      is_offers_deleted: 0,
    });

    return res.status(200).json({ status: true, allOffers });
  } catch (error) {
    return res.status(400).json({ status: false, error: error.message });
  }
};

exports.deleteOffer = async (req, res) => {
  try {
    const { offerId } = req.params;
    const { hotel_id: hotelId } = req.user.hotel;

    await OffersModel.updateOffers(
      {
        offers_hotel_id: hotelId,
        offers_id: offerId,
      },
      {
        is_offers_deleted: 1,
      }
    );

    return res.status(200).json({ status: true, offerId });
  } catch (error) {
    return res.status(400).json({ status: false, error: error.message });
  }
};

exports.endOfferById = async (req, res) => {
  try {
    const { offerId } = req.params;
    const { hotel_id: hotelId } = req.user.hotel;

    await OffersModel.updateOffers(
      {
        offers_hotel_id: hotelId,
        offers_id: offerId,
      },
      {
        is_offers_finished: 1,
      }
    );

    const Offer = await OffersModel.findOne({
      offers_id: offerId,
    });

    return res.status(200).json({ status: true, Offer });
  } catch (error) {
    return res.status(400).json({ status: false, error: error.message });
  }
};

exports.getAllBooking = async (request, response) => {
  try {
    const { hotel_id: hotelId } = request.user.hotel;
    await BookingTable.updateBookingTime({
      is_booking_finished: 1,
      booking_hotel_id: hotelId,
    });

    const allBooking = await BookingTable.fetchAllBooking({
      is_booking_deleted: 0,
      booking_hotel_id: hotelId,
    });

    return response.status(200).json({ status: true, allBooking });
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      error: error.message,
      status: false,
    });
  }
};

exports.updateBookingById = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const { hotel_id: hotelId } = req.user.hotel;

    await BookingTable.updateBooking(
      {
        booking_hotel_id: hotelId,
        booking_id: bookingId,
      },
      {
        is_booking_finished: 1,
      }
    );

    const booking = await BookingTable.findOne({
      booking_id: bookingId,
    });

    return res.status(200).json({ status: true, booking });
  } catch (error) {
    return res.status(400).json({ status: false, error: error.message });
  }
};

exports.getAllHotelUserCommentById = async (req, res) => {
  try {
    const { hotel_id: hotelId } = req.user.hotel;
    console.log(hotelId);
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
