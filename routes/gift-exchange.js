const express = require("express")
const GiftExchange = require("../models/gift-exchange")
const router = express.Router() 

// const names = ["me", "you", "them", "us", "her", "him", "they", "y'all"]

router.post("/pairs", async (req, res, next) => {
    try {
        const pairs = await GiftExchange.pairs(req.body.names)
        res.status(200).json(pairs)
    } catch (err) {
        next(err)
    }
})

router.post("/traditional", async (req, res, next) => {
    try {
        const tradition = await GiftExchange.traditional(req.body.names)
        res.status(200).json(tradition)
    } catch(err) {
        next(err)
    }

})

module.exports = router