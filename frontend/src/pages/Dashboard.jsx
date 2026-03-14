import { useState, useEffect } from "react"
import api from "../services/api"

import Layout from "../components/Layout"
import StatsCards from "../components/StatsCards"
import Filters from "../components/Filters"
import ChartsSection from "../components/ChartsSection"
import { Link } from "react-router-dom"


export default function Dashboard(){
    
    const [analytics,setAnalytics] = useState([])
    const [trend,setTrend] = useState([])
    
    const fetchAnalytics = async(filters={})=>{
    
      const res = await api.get("/analytics",{params:filters})
    
      setAnalytics(res.data)
    
    }
 

  useEffect(()=>{

    fetchAnalytics()

  },[])
  const handleBarClick = async(feature)=>{

  try{

    const res = await api.get(`/trend/${feature}`)

    setTrend(res.data)

  }catch(err){

    console.log(err)

  }

}

  return(

    <Layout>

      <StatsCards/>

     <Filters onFilterChange={fetchAnalytics}/>

      <ChartsSection
  analytics={analytics}
  trend={trend}
  onBarClick={handleBarClick}
/>
   <Link
  to="/users"
  className="flex items-center gap-3 hover:bg-slate-800 p-3 rounded-lg"
>
  Users
</Link>
    </Layout>
    

  )

}