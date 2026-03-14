import express from "express"
import pool from "../config/db.js"

const router = express.Router()

router.get("/trend/:feature", async (req, res) => {

  try {

    const feature = req.params.feature

    const result = await pool.query(`
      SELECT
        DATE_TRUNC('day', timestamp) AS date,
        COUNT(*) AS clicks
      FROM feature_clicks
      WHERE feature_name = $1
      GROUP BY DATE_TRUNC('day', timestamp)
      ORDER BY DATE_TRUNC('day', timestamp)
    `,[feature])

    res.json(result.rows)

  } catch (err) {

    res.status(500).json(err.message)

  }

})

export default router