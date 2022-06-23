const express = require("express")
const morgan = require("morgan")
const router = require("./routes/gift-exchange")
const { NotFoundError } = require("./utils/errors")

const app = express() 

app.use(morgan("tiny"))
app.use(express.json())
app.use("/gift-exchange", router) 

app.get("/", async (req, res, next) => {
    res.status(200).json({ "ping" : "pong" })
})

app.use(async (req, res, next) => {
    return next(new NotFoundError())
})

app.use((error, req, res, next) => {
    const status = error.status || 500
    const message = error.message 

    return res.status(status).json({
        error : {message, status}
    })
})

module.exports = app 
