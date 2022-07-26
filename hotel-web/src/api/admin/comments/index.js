import axios from "../.."

export const fetchAllComments = (hotelId) =>
  axios.get(`api/user/hotelList/${hotelId}/view-comments`)

export const addNewComment = (feedBack, hotelId) =>
  axios.post(`api/user/hotelList/${hotelId}/add-comment`, feedBack)

export const deleteComment = (commentId, hotelId) =>
  axios.delete(`api/user/hotelList/${hotelId}/delete-comment/${commentId}`)

export const fetchHotelUserCommentsList = () => axios.get(`api/hotel/comments`)
