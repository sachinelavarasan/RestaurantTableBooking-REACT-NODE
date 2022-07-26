import { createSlice } from "@reduxjs/toolkit"
import { signup } from "../../api/authOld/signup"
import verifyInviteCodeApi from "../../api/authOld/verifyInviteCode"

export const signupSlice = createSlice({
  name: "signup",
  initialState: {
    isSubmitting: false,
    errorMessage: "",
    showPassword: false,
    showValidationBox: false,
    step: 1, // which page user is on currently. 1(invite-code),2(register),3(succcess)
  },
  reducers: {
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload
    },
    incrementStep: (state) => {
      state.step += 1
    },
    decrementStep: (state) => {
      if (state.step > 0) {
        state.step -= 1
      }
    },
    setSubmitting: (state, action) => {
      state.isSubmitting = action.payload
    },
    setShowValidationBox: (state, action) => {
      state.showValidationBox = action.payload
    },
    setShowPassword: (state, action) => {
      state.showPassword = action.payload
    },
  },
})

export const {
  setErrorMessage,
  incrementStep,
  decrementStep,
  setSubmitting,
  setShowValidationBox,
  setShowPassword,
} = signupSlice.actions

export const verifyInviteCode = (data) => async (dispatch) => {
  try {
    dispatch(setSubmitting(true))

    await verifyInviteCodeApi(data)

    dispatch(setSubmitting(false))
    dispatch(incrementStep())
    dispatch(setErrorMessage(""))
  } catch (err) {
    dispatch(setErrorMessage("Failed. please check your code again."))
  }
}

export const registerUser = (data, callback) => async (dispatch) => {
  try {
    if (!data.full_name || !data.email) {
      dispatch(setErrorMessage("Fields Cannot be empty"))
      return
    }
    if (data.password !== data.c_password) {
      dispatch(setErrorMessage("passwords are not matching."))
      return
    }
    if (!data.password || !data.c_password) {
      dispatch(setErrorMessage("passwords cannot be empty."))
      return
    }

    if (!data.privacy) {
      dispatch(setErrorMessage("Please Accept privacy policy"))
      return
    }

    dispatch(setSubmitting(true))

    await signup(data)
    dispatch(incrementStep())
    localStorage.removeItem("orgName")
    localStorage.removeItem("orgLoca")
    localStorage.removeItem("tgovOrgId")
    localStorage.removeItem("tgovOrgCode")

    dispatch(setSubmitting(false))
    dispatch(setErrorMessage(""))
  } catch (err) {
    callback(err.response)
    dispatch(
      setErrorMessage(err.response.data.message || err.response.data.error)
    )
  }
}
export const nextStepForNewOrg = (data) => async (dispatch) => {
  try {
    if (data.rto) {
      if (!data.rtoCode) {
        dispatch(setErrorMessage("Please Type valid RTO code"))
        return
      }
    }
    if (!data.country || !data.org_name) {
      dispatch(setErrorMessage("Fields Cannot be empty"))
      return
    }
    localStorage.setItem("orgName", data.org_name)
    localStorage.setItem("orgLoca", data.country)
    if (data.tgovOrgId && data.tgovOrgCode) {
      localStorage.setItem("tgovOrgId", data.tgovOrgId)
      localStorage.setItem("tgovOrgCode", data.tgovOrgCode)
    }

    dispatch(setSubmitting(false))
    dispatch(incrementStep())
    dispatch(setErrorMessage(""))
  } catch (err) {
    dispatch(setErrorMessage(err.response.data.message))
  }
}

// state access fn's
export const signupSelector = (state) => state.signup

export default signupSlice.reducer
