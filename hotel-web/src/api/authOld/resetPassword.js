import instance from ".."

const forgotPassword = (data) => instance.post("/auth/password-reset", data)
export const findUserByToken = (token) =>
  instance.get(`/auth/findUserByToken?token=${token}`)

export default forgotPassword
