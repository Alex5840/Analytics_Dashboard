import express from "express"
import pool from "../config/db.js"

const router = express.Router()

router.get("/analytics", async(req,res)=>{

  try{

    const { start, end, age, gender } = req.query

    const result = await pool.query(

      `SELECT fc.feature_name,
              COUNT(*) AS total_clicks
       FROM feature_clicks fc
       JOIN users u ON u.id = fc.user_id
       WHERE ($1::date IS NULL OR fc.timestamp >= $1)
       AND ($2::date IS NULL OR fc.timestamp <= $2)
       AND ($3::int IS NULL OR u.age >= $3)
       AND ($4::text IS NULL OR u.gender = $4)
       GROUP BY fc.feature_name`,

      [start,end,age,gender]

    )

    res.json(result.rows)

  }catch(err){

    res.status(500).json(err.message)

  }

})

export default router