import axios from "../.."

export const fetchHotelMenuList = () => axios.get(`api/hotel/menuList`)

export const addMenuToHotel = (data) => axios.post(`api/hotel/addmenu`, data)

export const updateFoodItem = (menuId, data) =>
  axios.patch(`api/hotel/edit-menu/${menuId}`, data)

export const deleteMenuById = (menuId) =>
  axios.delete(`api/hotel/removemenu/${menuId}`)

export const fetchHotelTableList = () => axios.get(`api/hotel/tableList`)

export const addTableToHotel = (data) => axios.post(`api/hotel/addtable`, data)

export const updateTableItem = (tableId, data) =>
  axios.patch(`api/hotel/edit-table/${tableId}`, data)

export const deleteTableById = (tableId) =>
  axios.delete(`api/hotel/remove-table/${tableId}`)

export const fetchHotelById = (hotelId) =>
  axios.get(`api/user/hotelList/${hotelId}/view`)

export const fetchHotelOffersList = () => axios.get(`api/hotel/offersList`)

export const addOffersToHotel = (data) =>
  axios.post(`api/hotel/addoffers`, data)

export const updateOfferItem = (offerId, data) =>
  axios.patch(`api/hotel/edit-offer/${offerId}`, data)

export const deleteOfferById = (offerId) =>
  axios.delete(`api/hotel/remove-offer/${offerId}`)

export const endOfferById = (offerId) =>
  axios.patch(`api/hotel/end-offer/${offerId}`)

export const fetchHotelBookingList = () => axios.get(`api/hotel/bookingList`)

export const updateBookingStatus = (bookingId) =>
  axios.patch(`api/hotel/bookingList/${bookingId}`)
