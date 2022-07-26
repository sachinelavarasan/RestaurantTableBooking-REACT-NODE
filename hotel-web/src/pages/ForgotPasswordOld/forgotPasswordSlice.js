import { createSlice } from "@reduxjs/toolkit"
import forgotPassword from "../../api/authOld/forgotPassword"

export const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState: {
    isLoading: false,
    errorMessage: "",
    isEmailSubmitted: false,
    userData: {},
  },
  reducers: {
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setEmailSubmitted: (state, action) => {
      state.isEmailSubmitted = action.payload
    },
    setUserData: (state, action) => {
      state.userData = action.payload
    },
  },
})

export const { setEmailSubmitted, setErrorMessage, setUserData, setLoading } =
  forgotPasswordSlice.actions

// sends a req to auth/forgot-password/recovery-email
export const sendRecoveryEmail = (data, callback) => async (dispatch) => {
  dispatch(setLoading(true))
  try {
    const resp = await forgotPassword(data)

    dispatch(setUserData(resp.data.user))
    dispatch(setLoading(false))
    dispatch(setEmailSubmitted(true))
    dispatch(setErrorMessage(""))
  } catch (err) {
    callback(err.response)
    dispatch(setLoading(false))
    dispatch(
      setErrorMessage(err.response.data.message || err.response.data.error)
    )
  }
}

// state access fn's
export const forgotPasswordSelector = (state) => state.forgotPassword

export default forgotPasswordSlice.reducer
