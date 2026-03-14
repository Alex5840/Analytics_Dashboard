import express from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import pool from "../config/db.js"

const router = express.Router()

// REGISTER
router.post("/register", async (req, res) => {

  try {

    const { username, password, age, gender } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    const result = await pool.query(
      `INSERT INTO users(username,password,age,gender)
       VALUES($1,$2,$3,$4)
       RETURNING *`,
      [username, hashedPassword, age, gender]
    )

    res.json(result.rows[0])

  } catch (error) {
    res.status(500).json(error.message)
  }
})


// LOGIN
router.post("/login", async (req, res) => {

  try {

    const { username, password } = req.body

    const result = await pool.query(
      "SELECT * FROM users WHERE username=$1",
      [username]
    )

    if (result.rows.length === 0) {
      return res.status(400).json("User not found")
    }

    const user = result.rows[0]

    const valid = await bcrypt.compare(password, user.password)

    if (!valid) {
      return res.status(400).json("Invalid password")
    }

    const token = jwt.sign(
  { id: user.id },
  process.env.JWT_SECRET,
  { expiresIn: "1d" }
)

    res.json({ token })

  } catch (error) {
    res.status(500).json(error.message)
  }
})

export default router