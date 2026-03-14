import api from "../services/api"

export const trackEvent = async(feature)=>{

  const token = localStorage.getItem("token")

  await api.post(
    "/track",
    {feature_name:feature},
    {headers:{Authorization:token}}
  )

}