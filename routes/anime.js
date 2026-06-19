import express from "express"
import animeData from "../data/anime.js"

const router = express.Router();

router.get("/", (req, res) => {
    res.send(animeData)
})

// create a POST route
router.post("/", (req, res) => {
    res.send(animeData)
    items.push(req.body);
    res.status(201).json(item);
});







export default router