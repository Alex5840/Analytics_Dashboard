import { useEffect, useState } from "react"
import api from "../services/api"

export default function Users(){

  const [users,setUsers] = useState([])

  useEffect(()=>{

    const fetchUsers = async ()=>{

      try{

        const res = await api.get("/users")

        setUsers(res.data)

      }catch(err){

        console.log(err)

      }

    }

    fetchUsers()

  },[])

  return(

    <div className="p-6">

      <h2 className="text-2xl font-bold mb-6">
        Users
      </h2>

      <table className="w-full bg-white rounded-lg shadow">

        <thead className="bg-gray-100">

          <tr>
            <th className="p-3 text-left">Username</th>
            <th className="p-3 text-left">Age</th>
            <th className="p-3 text-left">Gender</th>
          </tr>

        </thead>

        <tbody>

          {users.map(user => (

            <tr key={user.id} className="border-t">

              <td className="p-3">{user.username}</td>
              <td className="p-3">{user.age}</td>
              <td className="p-3">{user.gender}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )

}