const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
require("colors")

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"))
}

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
})
