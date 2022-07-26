import { createSlice } from "@reduxjs/toolkit"
import * as authApi from "../../api/auth"

export const resetPasswordSlice = createSlice({
  name: "resetPassword",
  initialState: {
    showValidationBox: false,
    passwordsMatch: false,
    pwResetted: false,
    errorMessage: "",
    showPassword: false,
  },
  reducers: {
    setShowValidationBox: (state, action) => {
      state.showValidationBox = action.payload
    },
    setPasswordsMatch: (state, action) => {
      state.passwordsMatch = action.payload
    },
    setPWResetted: (state, action) => {
      state.pwResetted = action.payload
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload
    },
    setShowPassword: (state, action) => {
      state.showPassword = action.payload
    },
  },
})

export const {
  setShowPassword,
  setShowValidationBox,
  setHasPasswordBiengFocused,
  setPasswordsMatch,
  setPWResetted,
  setErrorMessage,
} = resetPasswordSlice.actions

// sends a req to auth/forgot-password/recovery-email
export const resetPassword = (data, callback) => async (dispatch) => {
  try {
    await authApi.forgotPassword(data)
    dispatch(setPWResetted(true))
    dispatch(setErrorMessage(""))
  } catch (err) {
    callback(err.response)
    dispatch(setPWResetted(false))
    dispatch(setErrorMessage("An error occured.Please try again."))
  }
}

// state access fn's
export const resetPasswordSelector = (state) => state.resetPassword

export default resetPasswordSlice.reducer
