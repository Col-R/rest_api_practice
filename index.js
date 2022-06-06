const fs = require("fs/promises");
const express = require ("express");
const cors = require ("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json()); // middleware to support json receive
app.use(cors());

app.get("/home", (req, res) => {
    const tops = ["T-Shirt", "Sweater", "Button-Up"];
    const bottoms = ["Shorts", "Pants", "Jeans"];
    const shoes = ["Sneakers", "Sandals", "Boots"];
    res.json({
        tops: _.sample(tops),
        bottoms: _.sample(bottoms),
        shoes: _.sample(shoes)
    })
});

app.get("/comments/:id", async (req,res) => {
    const id = req.params.id;
    let content;

    try {
        content = await fs.readFile(`data/comments/${id}.txt`, "utf-8");
    } catch (error) {
        return res.sendStatus(404);
    }
    res.json({
        content: content
    })
})

app.post ("/comments" , async (req, res) => {
    const id = uuid();
    const content = req.body.content;

    // just going to use a text file to store content for this, normally would be in a database obvi
    if (!content) {
        return res.sendStatus(400);
    }
    // in postman body-> raw -> JSONM -> {
    //     "content": "This is a comment!"
    // }
    // Then sent post request.
    // will create data directory to store post request data

    await fs.mkdir("data/comments", { recursive: true });
    await fs.writeFile(`data/comments/${id}.txt`, content);

    res.status(201).json({
        id: id
    });
})

app.listen(3000, () => console.log("Server is up and running"))