import { useNavigate } from "react-router-dom"

export default function Navbar(){

  const navigate = useNavigate()

  const handleLogout = () => {

    localStorage.removeItem("token")

    navigate("/")
  }

  return(

    <div className="bg-white shadow px-6 py-4 flex justify-between">

      <h1 className="text-xl font-semibold">
        Product Analytics Dashboard
      </h1>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>

    </div>
  )
}