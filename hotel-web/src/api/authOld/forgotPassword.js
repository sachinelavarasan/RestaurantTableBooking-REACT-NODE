import instance from ".."

const forgotPassword = (data) => instance.post("/auth/forgot-password", data)

export default forgotPassword
