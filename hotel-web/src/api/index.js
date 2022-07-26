import axios from "axios"

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
})

// runs on each request.
instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("jwtToken")
    const jcUserType = localStorage.getItem("jc-user-type")
    config.headers = {
      Authorization: `Bearer ${token}`,
      jcUserType,
    }

    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

export default instance
