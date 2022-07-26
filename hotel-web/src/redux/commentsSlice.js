import { createSlice } from "@reduxjs/toolkit"
import * as commentsApi from "../api/admin/comments"

const DELAY = 500

const commentsSlice = createSlice({
  initialState: {
    error: null,
    comments: null,
    isListLoading: true,
    hotelUserComments: null,
  },
  name: "comments",
  reducers: {
    setComments: (state, action) => {
      state.comments = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    setIsListLoading: (state, action) => {
      state.isListLoading = action.payload
    },
    setHotelUserComments: (state, action) => {
      state.hotelUserComments = action.payload
    },
    removeCommentById(state, action) {
      state.comments = state.comments.filter(
        (item) => item.comments_id !== action.payload
      )
    },
  },
})

export const {
  setComments,
  setError,
  setIsListLoading,
  setHotelUserComments,
  removeCommentById,
} = commentsSlice.actions

export const getAllComments = (hotelId) => async (dispatch) => {
  dispatch(setIsListLoading(true))

  try {
    const resp = await commentsApi.fetchAllComments(hotelId)

    dispatch(setComments(resp.data?.allComments))
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
export const addComment = (feedBack, hotelId, callback) => async (dispatch) => {
  dispatch(setIsListLoading(true))

  try {
    const resp = await commentsApi.addNewComment({ feedBack, hotelId })

    dispatch(setComments(resp.data?.allComments))
    if (callback) {
      callback()
    }
  } catch (error) {
    dispatch(
      setError(error?.response?.data?.message || "Something went wrong.")
    )
  } finally {
    dispatch(setIsListLoading(false))
  }
}

export const deleteComment =
  (commentId, hotelId, callback) => async (dispatch) => {
    dispatch(setIsListLoading(true))
    try {
      await commentsApi.deleteComment(commentId, hotelId)

      dispatch(removeCommentById(commentId))

      if (callback) {
        callback()
      }
    } catch (error) {
      dispatch(
        setError(error?.response?.data?.message || "Something went wrong.")
      )
    } finally {
      dispatch(setIsListLoading(false))
    }
  }

export const getHotelUserCommentsList = () => async (dispatch) => {
  dispatch(setIsListLoading(true))
  try {
    const resp = await commentsApi.fetchHotelUserCommentsList()

    dispatch(setHotelUserComments(resp.data?.allComments))
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

export const commentsSelector = (state) => state.comments
export default commentsSlice.reducer
