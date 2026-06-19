// import express
import express from "express"
import animeRoutes from "./routes/anime.js"
import charactersRoutes from "./routes/characters.js"
import imagesRoutes from "./routes/images.js"


// create our express app
const app = express();

// set up a port
const port = 3000

app.use("/anime", animeRoutes)
app.use("/characters", charactersRoutes)
app.use("/images", imagesRoutes)

// create a route
app.get("/", (req, res) => {
res.send("Hello World");
})

//starting our server = bottom of page
app.listen(port, () => {
    console.log("Listening on port: " + port)
})
