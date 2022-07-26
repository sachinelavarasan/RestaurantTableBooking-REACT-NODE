import instance from ".."

const getUser = () => instance.get("/user")

export default getUser
