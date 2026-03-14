import axios from "axios"

const api = axios.create({
  baseURL: "https://analytics-dashboard-0z04.onrender.com/api"
})

export default api