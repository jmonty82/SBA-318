// import express
import express from "express"
import animeRoutes from "./routes/anime.js"
import charactersRoutes from "./routes/characters.js"
import imagesRoutes from "./routes/images.js"


// Create our express app
const app = express();

// Set up a port
const port = 3000



app.use("/anime", animeRoutes)
app.use("/characters", charactersRoutes)
app.use("/images", imagesRoutes)



// Create a route
app.get("/", (req, res) => {
    res.send("Hello World");
})

const items = {
    "id": "",
    "name": "",
    "summary": ""
}
// Create a POST route
app.post("/", (req, res) => {
    res.send("New Post Added!")
    items.push(req.body);
    res.status(201).json(item);
});

// Create PATCH or PUT routes for data
app.patch("/", (req, res) => {
    res.send("Post Updated!")
})
app.put("/", (req, res) => {
    res.send("Post Changed!")
})

// Create DELETE routes for data
app.delete("/", (req, res) => {
    res.send("Post Deleted!")
})

//Starting our server = bottom of page
app.listen(port, () => {
    console.log("Listening on port: " + port)
})
