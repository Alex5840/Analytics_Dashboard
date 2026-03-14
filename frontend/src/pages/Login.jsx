import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../services/api"

export default function Login(){

  const navigate = useNavigate()

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")

  const handleLogin = async(e)=>{
    e.preventDefault()

    try{

      const res = await api.post("/login",{username,password})

      localStorage.setItem("token",res.data.token)

      navigate("/dashboard")

    }catch(err){
      alert("Invalid credentials")
    }
  }

  return(

    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">

      <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-purple-700 to-blue-700 opacity-30 blur-3xl"></div>

      <div className="relative bg-slate-900 p-10 rounded-2xl shadow-2xl w-96 border border-slate-700">

        <h2 className="text-3xl font-bold mb-6 text-center">
          Analytics Dashboard
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">

          <input
            placeholder="Username"
            onChange={(e)=>setUsername(e.target.value)}
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:ring-2 focus:ring-indigo-500"
          />

          <button className="w-full bg-indigo-600 hover:bg-indigo-500 transition p-3 rounded-lg font-semibold">
            Login
          </button>

        </form>

        <p className="text-center mt-4 text-sm text-gray-400">
          No account?
          <span
            className="text-indigo-400 ml-1 cursor-pointer"
            onClick={()=>navigate("/register")}
          >
            Sign up
          </span>
        </p>

      </div>

    </div>
  )
}