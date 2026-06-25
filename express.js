// import express
import express from "express"
import animeRoutes from "./routes/anime.js"
import charactersRoutes from "./routes/characters.js"
import imagesRoutes from "./routes/images.js"
import animeData from "./data/anime.js";
import ejs from "ejs"



// Create our express app
const app = express();

// Set up a port
const port = 3000
app.use(express.json())

// Views template and engine
app.set("view engine", "ejs")
app.get("/", (req, res) => {
    res.render("form.ejs")
})

app.use("/anime", animeRoutes)
app.use("/characters", charactersRoutes)
app.use("/images", imagesRoutes)


// add the middleware to our app
app.use((req, res, next) => {
    console.log(req.method, req.url);
    // take us to the next middleware or the next route
    next()
})

// error handling middleware
app.use((err, req, res, next) => {
    console.log(err.message)
    res.status(500).send("something went wrong")
})


// Create a route
app.get("/", (req, res) => {
    res.send("Hello World");
})

const items =
{
    "id": "",
    "name": "",
    "summary": ""
}
// Create a POST route
app.post("/", (request, response) => {
    // res.send(animeData)
    const item = request.body;
    console.log(items)
    console.log(item)
    animeData.push(item);
    response.status(201).send(item);
});

const newCharacter =
{
    "id": 9,
    "firstname": "Orihime",
    "lastname": "Inoue",
    "series": "Bleach"
}
// Create PATCH or PUT routes for data
app.patch("/", (req, res) => {
    const id = parseInt(req.params.id);
    const updatedItem = req.body;
    items[id] = updatedItem;
    res.send(updatedItem);
});

app.put("/", (req, res) => {
    res.send("Post Changed!")
})

// query parameters (api-key, limit, breed-id) // cat.api.com/api/?limit=10 // (filter) (tracking) (optional)
app.get("/my*cat", (req, res) => {
    console.log(req.query)
res.send("Meow!!")
})

// Create DELETE routes for data
app.delete("/", (req, res) => {
    // res.send("Post Deleted!")
    const id = parseInt(req.params.id);
    items.splice(id, 1);
    res.status(204).send();
});

//Starting our server = bottom of page
app.listen(port, () => {
    console.log("Listening on port: " + port)
})
