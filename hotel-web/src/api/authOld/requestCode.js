import instance from ".."

const requestCode = (data) => instance.post("/auth/request-code", data)

export default requestCode
