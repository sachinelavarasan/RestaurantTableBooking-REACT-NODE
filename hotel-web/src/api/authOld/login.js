import instance from ".."

const login = (data) => instance.post("/auth/login", data)

export default login
