import { createSlice } from "@reduxjs/toolkit"
import * as hotelApi from "../api/admin/hotel"

const DELAY = 500
const initialFormError = { className: "" }

const hotelSlice = createSlice({
  initialState: {
    error: null,
    hotelMenuList: null,
    hotelTableList: null,
    hotelOffersList: null,
    viewHotel: null,
    bookingList: null,
    isListLoading: true,
    isLoading: false,
    menuType: [],
    formError: initialFormError,
    calendarSlots: [],
    search: "",
  },
  name: "hotel",
  reducers: {
    setHotelMenuList: (state, action) => {
      state.hotelMenuList = action.payload
    },
    setViewHotel: (state, action) => {
      state.viewHotel = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    setIsListLoading: (state, action) => {
      state.isListLoading = action.payload
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setFormError(state, action) {
      state.formError[action.payload.field] = action.payload.message
    },
    setMenuType: (state, action) => {
      state.menuType = action.payload
    },
    clearFormError(state) {
      state.formError = initialFormError
    },
    removeMenuById(state, action) {
      state.hotelMenuList = state.hotelMenuList.filter(
        (item) => item.menu_id !== action.payload
      )
    },
    setHotelTablesList: (state, action) => {
      state.hotelTableList = action.payload
    },
    editTable(state, action) {
      const tableIndex = state.hotelTableList.findIndex(
        (item) => item.table_id === action.payload.table_id
      )
      state.hotelTableList[tableIndex] = action.payload
    },
    removeTableById(state, action) {
      state.hotelTableList = state.hotelTableList.filter(
        (item) => item.table_id !== action.payload
      )
    },
    removeOfferById(state, action) {
      state.hotelOffersList = state.hotelOffersList.filter(
        (item) => item.offers_id !== action.payload
      )
    },
    setHotelOffersList: (state, action) => {
      state.hotelOffersList = action.payload
    },
    updateOffer(state, action) {
      const offerIndex = state.hotelOffersList.findIndex(
        (item) => item.offers_id === action.payload.offers_id
      )
      state.hotelOffersList[offerIndex] = action.payload
    },
    setBookingList: (state, action) => {
      state.bookingList = action.payload
    },
    setCalendarSlot(state, action) {
      if (!state.calendarSlots.includes(action.payload)) {
        state.calendarSlots.push(action.payload)
      }
    },
    clearCalendarSlots(state) {
      state.calendarSlots = []
    },
    setSearch(state, action) {
      state.search = action.payload
    },
    updateBooking(state, action) {
      const bookingIndex = state.bookingList.findIndex(
        (item) => item.booking_id === action.payload.booking_id
      )
      state.bookingList[bookingIndex] = action.payload
    },
  },
})

export const {
  setHotelMenuList,
  setHotelTablesList,
  setIsLoading,
  setFormError,
  clearFormError,
  setError,
  setIsListLoading,
  removeMenuById,
  setViewHotel,
  setMenuType,
  editTable,
  removeTableById,
  setHotelOffersList,
  removeOfferById,
  updateOffer,
  setBookingList,
  setCalendarSlot,
  clearCalendarSlots,
  setSearch,
  updateBooking,
} = hotelSlice.actions

export const getHotelMenuList = () => async (dispatch) => {
  dispatch(setIsListLoading(true))
  try {
    const resp = await hotelApi.fetchHotelMenuList()

    dispatch(setHotelMenuList(resp.data?.allHotelMenu))
    dispatch(setMenuType(resp.data?.allMenuType))
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
    const resp = await hotelApi.fetchHotelById(hotelId)

    dispatch(setViewHotel(resp.data?.hotel))
  } catch (error) {
    dispatch(
      setError(error?.response?.data?.message || "Something went wrong.")
    )
  } finally {
    dispatch(setIsListLoading(false))
  }
}

export const addMenuToHotel = (data, callback) => async (dispatch) => {
  dispatch(setIsLoading(true))

  try {
    const resp = await hotelApi.addMenuToHotel(data)

    dispatch(setHotelMenuList(resp.data?.allHotelMenu))

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

export const deleteMenuFromList = (menuId, callback) => async (dispatch) => {
  dispatch(setIsLoading(true))

  try {
    await hotelApi.deleteMenuById(menuId)
    dispatch(removeMenuById(menuId))

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

export const updateFoodItem = (menuId, data, callback) => async (dispatch) => {
  dispatch(setIsLoading(true))

  try {
    const resp = await hotelApi.updateFoodItem(menuId, data)
    dispatch(setHotelMenuList(resp.data?.allHotelMenu))
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

export const getHotelTableList = () => async (dispatch) => {
  dispatch(setIsListLoading(true))
  try {
    const resp = await hotelApi.fetchHotelTableList()

    dispatch(setHotelTablesList(resp.data?.allHotelTables))
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
export const getTableById = (hotelId) => async (dispatch) => {
  dispatch(setIsListLoading(true))
  try {
    const resp = await hotelApi.fetchHotelById(hotelId)

    dispatch(setViewHotel(resp.data?.hotel))
  } catch (error) {
    dispatch(
      setError(error?.response?.data?.message || "Something went wrong.")
    )
  } finally {
    dispatch(setIsListLoading(false))
  }
}

export const addTableToHotel = (data, callback) => async (dispatch) => {
  dispatch(setIsLoading(true))

  try {
    const resp = await hotelApi.addTableToHotel(data)

    dispatch(setHotelTablesList(resp.data?.allHotelTables))

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

export const deleteTableFromList = (tableId, callback) => async (dispatch) => {
  dispatch(setIsLoading(true))

  try {
    await hotelApi.deleteTableById(tableId)
    dispatch(removeTableById(tableId))

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

export const updateTableItem =
  (tableId, data, callback) => async (dispatch) => {
    dispatch(setIsLoading(true))

    try {
      const resp = await hotelApi.updateTableItem(tableId, data)
      dispatch(editTable(resp.data?.hotelTable))
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

export const getHotelOffersList = () => async (dispatch) => {
  dispatch(setIsListLoading(true))
  try {
    const resp = await hotelApi.fetchHotelOffersList()

    dispatch(setHotelOffersList(resp.data?.allOffers))
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

export const addOffersToHotel = (data, callback) => async (dispatch) => {
  dispatch(setIsLoading(true))

  try {
    const resp = await hotelApi.addOffersToHotel(data)

    dispatch(setHotelOffersList(resp.data?.allOffers))

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

export const deleteOfferFromList = (offerId, callback) => async (dispatch) => {
  dispatch(setIsLoading(true))

  try {
    await hotelApi.deleteOfferById(offerId)
    dispatch(removeOfferById(offerId))

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
export const endOfferFromList = (offerId, callback) => async (dispatch) => {
  dispatch(setIsLoading(true))

  try {
    const resp = await hotelApi.endOfferById(offerId)
    dispatch(updateOffer(resp.data.Offer))

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

export const updateOfferItem =
  (offerId, data, callback) => async (dispatch) => {
    dispatch(setIsLoading(true))

    try {
      const resp = await hotelApi.updateOfferItem(offerId, data)
      dispatch(setHotelOffersList(resp.data?.allOffers))
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

export const getBookingList = () => async (dispatch) => {
  dispatch(setIsListLoading(true))
  try {
    const resp = await hotelApi.fetchHotelBookingList()

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

export const updateBookedStatus = (bookingId, callback) => async (dispatch) => {
  dispatch(setIsLoading(true))

  try {
    const resp = await hotelApi.updateBookingStatus(bookingId)
    dispatch(updateBooking(resp.data.booking))

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

export const hotelSelector = (state) => state.hotel

export default hotelSlice.reducer
