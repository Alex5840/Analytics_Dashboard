import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import pool from "./config/db.js"

import authRoutes from "./routes/authRoutes.js"
import analyticsRoutes from "./routes/analyticsRoutes.js"
import trackRoutes from "./routes/trackRoutes.js"
import trendRoutes from "./routes/trendRoutes.js"
import userRoutes from "./routes/userRoutes.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

// TEST DATABASE CONNECTION
pool.connect()
  .then(() => {
    console.log("✅ PostgreSQL Connected")
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err.message)
  })

app.use("/api", authRoutes)
app.use("/api", analyticsRoutes)
app.use("/api", trackRoutes)
app.use("/api",trendRoutes)
app.use("/api", userRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})