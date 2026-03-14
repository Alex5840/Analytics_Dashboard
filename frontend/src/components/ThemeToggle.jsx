import { useEffect, useState } from "react"

export default function ThemeToggle(){

  const [dark,setDark] = useState(false)

  useEffect(()=>{
    if(dark){
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark")
    }
  },[dark])

  return(

    <button
      onClick={()=>setDark(!dark)}
      className="bg-indigo-500 text-white px-3 py-1 rounded-lg"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>

  )

}