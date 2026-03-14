import { motion } from "framer-motion"

export default function StatsCards(){

  const stats=[
    {title:"Total Clicks",value:"12,450"},
    {title:"Active Users",value:"1,203"},
    {title:"Features Used",value:"8"}
  ]

  return(

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

      {stats.map((card,i)=>(
        
        <motion.div
          key={i}
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          transition={{delay:i*0.2}}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-xl shadow-lg"
        >

          <p className="text-sm opacity-80">
            {card.title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {card.value}
          </h2>

        </motion.div>

      ))}

    </div>

  )

}