import { createSlice } from "@reduxjs/toolkit"
import * as userApi from "../api/admin/user"

const DELAY = 500
const initialFormError = { className: "" }
const userSlice = createSlice({
  initialState: {
    error: null,
    hotelList: null,
    hotelMenuList: null,
    hotelOffersList: null,
    bookingList: null,
    viewHotel: null,
    isListLoading: true,
    isLoading: false,
  },
  name: "user",
  reducers: {
    setHotelList: (state, action) => {
      state.hotelList = action.payload
    },
    setViewHotel: (state, action) => {
      state.viewHotel = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setIsListLoading: (state, action) => {
      state.isListLoading = action.payload
    },
    setHotelOffersList: (state, action) => {
      state.hotelOffersList = action.payload
    },
    setHotelMenuList: (state, action) => {
      state.hotelMenuList = action.payload
    },
    setFormError(state, action) {
      state.formError[action.payload.field] = action.payload.message
    },
    clearFormError(state) {
      state.formError = initialFormError
    },
    setBookingList: (state, action) => {
      state.bookingList = action.payload
    },
    removeBookingById(state, action) {
      state.bookingList = state.bookingList.filter(
        (item) => item.booking_id !== action.payload
      )
    },
  },
})

export const {
  setHotelList,
  setError,
  setIsListLoading,
  setViewHotel,
  setHotelOffersList,
  setHotelMenuList,
  setFormError,
  clearFormError,
  setIsLoading,
  setBookingList,
  removeBookingById,
} = userSlice.actions

export const getAllHotelList = () => async (dispatch) => {
  dispatch(setIsListLoading(true))
  try {
    const resp = await userApi.fetchAllHotelList()

    dispatch(setHotelList(resp.data?.allHotel))
  } catch (error) {
    dispatch(
      setError(error?.response?.data?.message || "Something went wrong.")
    )
  } finally {
    setTimeout(() => {
      dispatch(setIsListLoading(false))
    }, DELAY)
  }
}
export const getHotelById = (hotelId) => async (dispatch) => {
  dispatch(setIsListLoading(true))
  try {
    const resp = await userApi.fetchHotelById(hotelId)
    console.log(resp.data)
    dispatch(setViewHotel(resp.data?.hotel))
  } catch (error) {
    dispatch(
      setError(error?.response?.data?.message || "Something went wrong.")
    )
  } finally {
    dispatch(setIsListLoading(false))
  }
}
export const getHotelMenuAndOffersById = (hotelId) => async (dispatch) => {
  dispatch(setIsListLoading(true))
  try {
    const resp = await userApi.fetchHotelMenuAndOffersById(hotelId)
    dispatch(setHotelOffersList(resp.data?.allOffers))
    dispatch(setHotelMenuList(resp.data?.allHotelMenu))
  } catch (error) {
    dispatch(
      setError(error?.response?.data?.message || "Something went wrong.")
    )
  } finally {
    dispatch(setIsListLoading(false))
  }
}

export const getHotelWithTableById =
  (hotelId, startDate, startTime) => async (dispatch) => {
    dispatch(setIsListLoading(true))
    try {
      const resp = await userApi.fetchHotelWithTableById(
        hotelId,
        startDate,
        startTime
      )
      dispatch(setViewHotel(resp.data?.hotel))
    } catch (error) {
      dispatch(
        setError(error?.response?.data?.message || "Something went wrong.")
      )
    } finally {
      dispatch(setIsListLoading(false))
    }
  }

export const bookTable = (data, hotelId, callback) => async (dispatch) => {
  dispatch(setIsLoading(true))

  try {
    await userApi.bookTable(data, hotelId)
    if (callback) {
      callback()
    }
  } catch (error) {
    dispatch(
      setError(error?.response?.data?.message || "Something went wrong.")
    )
  } finally {
    dispatch(setIsLoading(false))
  }
}

export const getBookingList = () => async (dispatch) => {
  dispatch(setIsListLoading(true))
  try {
    const resp = await userApi.fetchBookingList()

    dispatch(setBookingList(resp.data?.allBooking))
  } catch (error) {
    dispatch(
      setError(error?.response?.data?.message || "Something went wrong.")
    )
  } finally {
    setTimeout(() => {
      dispatch(setIsListLoading(false))
    }, DELAY)
  }
}

export const cancelBooking = (bookingId, callback) => async (dispatch) => {
  dispatch(setIsLoading(true))

  try {
    await userApi.cancelBooking(bookingId)
    dispatch(removeBookingById(bookingId))

    if (callback) {
      callback()
    }
  } catch (error) {
    dispatch(
      setError(error?.response?.data?.message || "Something went wrong.")
    )
  } finally {
    setTimeout(() => {
      dispatch(setIsLoading(false))
    }, DELAY)
  }
}

export const userSelector = (state) => state.user

export default userSlice.reducer
