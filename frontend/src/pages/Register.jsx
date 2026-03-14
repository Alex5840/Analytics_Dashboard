import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../services/api"

export default function Register(){

  const navigate = useNavigate()

  const [form,setForm] = useState({
    username:"",
    password:"",
    age:"",
    gender:"Male"
  })

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()

    try{

      await api.post("/register",form)

      alert("Account created successfully")

      navigate("/")

    }catch(err){

      alert("Registration failed")

    }
  }

  return(

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 animate-gradient-x">

      <div className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-xl p-10 w-96">

        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
          name="username"
          placeholder="Username"
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500"
          onChange={handleChange}
          />

          <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500"
          onChange={handleChange}
          />

          <input
          name="age"
          type="number"
          placeholder="Age"
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500"
          onChange={handleChange}
          />

          <select
          name="gender"
          className="w-full border p-3 rounded-lg"
          onChange={handleChange}
          >

            <option>Male</option>
            <option>Female</option>
            <option>Other</option>

          </select>

          <button
          className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition transform hover:scale-105"
          >
            Sign Up
          </button>

        </form>

        <p className="text-center mt-4 text-sm">

          Already have an account?  
          <span
          className="text-indigo-600 cursor-pointer ml-1"
          onClick={()=>navigate("/")}
          >
            Login
          </span>

        </p>

      </div>

    </div>

  )
}