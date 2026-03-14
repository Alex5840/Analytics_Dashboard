import express from "express"
import pool from "../config/db.js"
import authMiddleware from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/track", authMiddleware, async (req,res)=>{

  try{

    const { feature_name } = req.body
    const userId = req.user.id

    await pool.query(
      `INSERT INTO feature_clicks (user_id, feature_name)
       VALUES ($1,$2)`,
      [userId, feature_name]
    )

    res.json({message:"Interaction tracked"})

  }catch(err){

    res.status(500).json(err.message)

  }

})

export default router