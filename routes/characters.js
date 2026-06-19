import express from "express"
import charactersData from "../data/characters.js"

const router = express.Router();

router.get("/", (req, res) => {
    res.send(charactersData)
})









export default router