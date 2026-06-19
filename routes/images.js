import express from "express"
import imagesData from "../data/images.js"

const router = express.Router();

router.get("/", (req, res) => {
    res.send(imagesData)
})









export default router