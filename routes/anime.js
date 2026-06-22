import express from "express"
import animeData from "../data/anime.js"

const router = express.Router();

router.get("/", (req, res) => {
    res.send(animeData)
})

// const items =
// {
//     "id": "",
//     "name": "",
//     "summary": ""
// }
// // // create a POST route
// // router.post("/", (req, res) => {
// //     res.send(animeData)
// //     items.push(req.body);
// //     res.status(201).json(item);
// // });
// // Create a POST route
// router.post("/", (req, res) => {
//     res.send(animeData)
//     const item = req.body;
//     animeData.push(items);
//     res.status(201).send(item);
// });






export default router