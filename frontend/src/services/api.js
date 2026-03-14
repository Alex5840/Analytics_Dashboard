import axios from "axios"

const API = axios.create({
  baseURL: "https://analytics-dashboard-0z04.onrender.com/api"
})

export default API