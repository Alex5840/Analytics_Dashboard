import express from "express"
import pool from "../config/db.js"

const router = express.Router()

router.get("/users", async(req,res)=>{

  try{

    const result = await pool.query(
      "SELECT id, username, age, gender FROM users"
    )

    res.json(result.rows)

  }catch(err){

    res.status(500).json(err.message)

  }

})

export default router