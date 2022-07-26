import axios from ".."

export const fetchOrganisationByRtoCode = (rtoCode) =>
  axios.get(`api/tgov/organisation/${rtoCode}`)

export const logIn = (data) => axios.post("/auth/login", data)

export const register = (data) => axios.post("auth/register/org-admin", data)

export const resetPassword = (data) => axios.post("/auth/forgot-password", data)

export const fetchProfile = () => axios.get("/profile/get")

export const fetchOrganisation = () => axios.get("/profile/organisation")

export const verifyUser = (userId) => axios.get(`/auth/verify-user/${userId}`)

export const forgotPassword = (data) => axios.post("/auth/password-reset", data)

export const findUserById = (id) => axios.get(`/auth/findUserById?id=${id}`)
