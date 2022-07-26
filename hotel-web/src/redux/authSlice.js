import { createSlice } from "@reduxjs/toolkit"

import * as authApi from "../api/auth"

const authSlice = createSlice({
  initialState: {
    error: null,
    isLoading: false,
    organisation: null,
    userOrganisation: null,
    onlineStudents: [],
    user: null,
  },
  name: "auth",
  reducers: {
    clearUser(state) {
      state.user = null
    },
    setError(state, action) {
      state.error = action.payload
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload
    },
    setOrganisation(state, action) {
      state.organisation = action.payload
    },
    setUserOrganisation(state, action) {
      state.userOrganisation = action.payload
    },
    setOnlineStudents(state, action) {
      state.onlineStudents = action.payload
    },
    setUser(state, action) {
      state.user = action.payload
    },
  },
})

export const {
  clearUser,
  setError,
  setIsLoading,
  setOrganisation,
  setUserOrganisation,
  setUser,
  setOnlineStudents,
} = authSlice.actions

export const fetchOrganisationByRtoCode =
  (rtoCode, callback) => async (dispatch) => {
    try {
      if (rtoCode) {
        const response = await authApi.fetchOrganisationByRtoCode(rtoCode)
        dispatch(setOrganisation(response.data?.organisation || null))

        if (callback) {
          callback()
        }
      }
    } catch (error) {
      dispatch(setOrganisation(null))
      dispatch(
        setError(error?.response?.data?.message || "Something went wrong.")
      )
    } finally {
      dispatch(setIsLoading(false))
    }
  }

export const logIn = (data, callback) => async (dispatch) => {
  dispatch(setIsLoading(true))

  try {
    const response = await authApi.logIn({
      us_email: data.email,
      us_password: data.password,
    })

    const { token, user } = response.data

    dispatch(setUserOrganisation(user?.organisation))
    dispatch(setUser(user))

    if (user.userProfile?.user_id && user.userProfile.user_type) {
      localStorage.setItem("jc-user-type", user.userProfile.user_type)
      localStorage.setItem("jwtToken", token)
      localStorage.setItem("userId", user.user_id)

      if (callback) {
        callback(user.userProfile)
      }
    }
  } catch (error) {
    dispatch(
      setError(error?.response?.data?.message || "Something went wrong.")
    )
  } finally {
    dispatch(setIsLoading(false))
  }
}

export const logInAfterVerification =
  (user, token, callback) => async (dispatch) => {
    dispatch(setIsLoading(true))

    try {
      const [userProfile] = user.userProfiles
      dispatch(setUser(user))

      if (userProfile?.up_id_user && userProfile?.up_id_typeuserprofile) {
        localStorage.setItem("jc-user-type", userProfile.up_id_typeuserprofile)
        localStorage.setItem("jwtToken", token)
        localStorage.setItem("userId", userProfile.up_id_user)

        if (callback) {
          callback(userProfile)
        }
      }
    } catch (error) {
      dispatch(
        setError(error?.response?.data?.message || "Something went wrong.")
      )
    } finally {
      dispatch(setIsLoading(false))
    }
  }

export const register = (data, callback) => async (dispatch) => {
  dispatch(setIsLoading(true))

  try {
    const postData = {
      c_password: data.confirmPassword,
      email: data.email,
      full_name: data.name,
      state_name: data.stateName,
      district_name: data.districtName,
      password: data.password,
      org_type: data.userType,
      imgLoca: data.imgLoca,
    }
    if (data.userType === "Hotel") {
      postData.restaurant_name = data.restaurantName
    }

    await authApi.register(postData)

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

export const resetPassword = (data, callback) => async (dispatch) => {
  dispatch(setIsLoading(true))

  try {
    await authApi.resetPassword({
      us_email: data.email,
    })

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

export const logout = (callBack) => (dispatch) => {
  dispatch(clearUser())
  localStorage.removeItem("jc-user-type")
  localStorage.removeItem("jwtToken")
  localStorage.removeItem("userId")
  if (callBack) {
    callBack()
  }
}

export const fetchProfile = (callback) => async (dispatch) => {
  dispatch(setIsLoading(true))
  try {
    const response = await authApi.fetchProfile()

    const responseOrganisation = await authApi.fetchOrganisation()

    const { user } = response.data
    const { userProfile } = user.userProfile
    dispatch(setUser(user))
    dispatch(setUserOrganisation(responseOrganisation?.data?.organisation))

    const currentProfile = response.data.user.userProfile

    if (userProfile?.user_id && userProfile?.user_type) {
      if (!localStorage.getItem("jc-user-type")) {
        localStorage.setItem("jc-user-type", currentProfile.user_type)
      }
      if (!localStorage.getItem("userId")) {
        localStorage.setItem("userId", userProfile.user_id)
      }
    }
  } catch (error) {
    dispatch(logout(callback))

    dispatch(
      setError(error?.response?.data?.message || "Something went wrong.")
    )
  } finally {
    dispatch(setIsLoading(false))
  }
}

export const verifyOrgUser = (data) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true))
    await authApi.verifyUser(data)
  } catch (err) {
    dispatch(setError("Failed verifying user."))
  } finally {
    setTimeout(() => {
      dispatch(setIsLoading(false))
    }, 2000)
  }
}

export const authSelector = (state) => state.auth

export default authSlice.reducer
