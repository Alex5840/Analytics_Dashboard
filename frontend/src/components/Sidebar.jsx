import { Link } from "react-router-dom"
import { ChartBarIcon, UsersIcon } from "@heroicons/react/24/outline"

export default function Sidebar(){

  return(

    <div className="w-64 bg-slate-900 text-white p-6 min-h-screen">

      <h1 className="text-2xl font-bold mb-8">
        Analytics
      </h1>

      <nav className="space-y-4">

        <Link
          to="/dashboard"
          className="flex items-center gap-3 hover:bg-slate-800 p-3 rounded-lg"
        >
          <ChartBarIcon className="w-5"/>
          Dashboard
        </Link>

        <Link
          to="/users"
          className="flex items-center gap-3 hover:bg-slate-800 p-3 rounded-lg"
        >
          <UsersIcon className="w-5"/>
          Users
        </Link>

      </nav>

    </div>

  )

}