import dotenv from "dotenv"
dotenv.config()

import pool from "../config/db.js"

async function seed(){

 try{

  console.log("Starting seed...")

  // Clear tables
  await pool.query("DELETE FROM feature_clicks")
  await pool.query("DELETE FROM users")

  // Insert users
  const users = [
   { username:"alex", age:22, gender:"Male" },
   { username:"john", age:25, gender:"Male" },
   { username:"sara", age:21, gender:"Female" },
   { username:"mike", age:30, gender:"Male" }
  ]

  for(const user of users){

   await pool.query(
    `INSERT INTO users(username,password,age,gender)
     VALUES($1,$2,$3,$4)`,
    [user.username,"123456",user.age,user.gender]
   )

  }

  console.log("Users inserted")

  const features = [
   "date_filter",
   "gender_filter",
   "age_filter",
   "bar_chart_zoom"
  ]

  // Insert feature clicks
  for(let i=0;i<100;i++){

   const feature =
    features[Math.floor(Math.random()*features.length)]

   const user =
    Math.floor(Math.random()*users.length)+1

   const daysAgo =
    Math.floor(Math.random()*10)

   const date = new Date()
   date.setDate(date.getDate()-daysAgo)

   await pool.query(
    `INSERT INTO feature_clicks(user_id,feature_name,timestamp)
     VALUES($1,$2,$3)`,
    [user,feature,date]
   )

  }

  console.log("Feature clicks inserted")

  console.log("Seed completed successfully")

  process.exit()

 }catch(err){

  console.error("Seed error:",err)
  process.exit()

 }

}

seed()