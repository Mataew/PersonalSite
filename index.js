const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const path = require("path")
require("dotenv").config()

app.use(cors())
app.use(express.json())
app.use(require("./routes/index"));

const connect = async () => {
  await mongoose.connect(process.env.MONGO)
  console.log("Соединение успешно установлено")

  app.listen(process.env.PORT, () => {
    console.log(`Server has been started on port http://localhost:${process.env.PORT}`)
  })
}

connect()