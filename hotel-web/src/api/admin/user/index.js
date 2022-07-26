import axios from "../.."

export const fetchAllHotelList = () => axios.get(`api/user/hotelList`)

export const fetchHotelById = (hotelId) =>
  axios.get(`api/user/hotelList/${hotelId}/view`)

export const fetchHotelMenuAndOffersById = (hotelId) =>
  axios.get(`api/user/hotelList/${hotelId}/menu-offer`)

export const fetchHotelWithTableById = (hotelId, startDate, startTime) =>
  axios.get(
    `api/user/hotelList/${hotelId}/booked?date=${startDate}&time=${startTime}`
  )

export const bookTable = (data, hotelId) =>
  axios.post(`api/user/hotelList/${hotelId}/book-table`, data)

export const fetchBookingList = () => axios.get(`api/user/bookingList`)

export const cancelBooking = (bookingId) =>
  axios.patch(`api/user/cancel-booking/${bookingId}`)
