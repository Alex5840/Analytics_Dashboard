import { useState, useEffect } from "react"
import Cookies from "js-cookie"

export default function Filters({ onFilterChange }){

  const [filters,setFilters] = useState({
    start:"",
    end:"",
    age:"",
    gender:""
  })

  useEffect(()=>{

    const savedFilters = Cookies.get("filters")

    if(savedFilters){

      const parsed = JSON.parse(savedFilters)
      setFilters(parsed)
      onFilterChange(parsed)

    }

  },[])

  const handleChange = (e)=>{

    const updated = {
      ...filters,
      [e.target.name]: e.target.value
    }

    setFilters(updated)

  }

  const applyFilters = ()=>{

    Cookies.set("filters", JSON.stringify(filters))

    onFilterChange(filters)

  }

  return(

    <div className="bg-white p-6 rounded-xl shadow">

      <div className="grid grid-cols-4 gap-4">

        <input
          type="date"
          name="start"
          value={filters.start}
          onChange={handleChange}
        />

        <input
          type="date"
          name="end"
          value={filters.end}
          onChange={handleChange}
        />

        <select
          name="age"
          value={filters.age}
          onChange={handleChange}
        >
          <option value="">Age</option>
          <option value="<18">&lt;18</option>
          <option value="18-40">18-40</option>
          <option value=">40">&gt;40</option>
        </select>

        <select
          name="gender"
          value={filters.gender}
          onChange={handleChange}
        >
          <option value="">Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

      </div>

      <button
        onClick={applyFilters}
        className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded"
      >
        Apply Filters
      </button>

    </div>

  )

}