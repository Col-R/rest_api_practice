const fs = require("fs/promises");
const express = require ("express");
const cors = require ("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");

const app = express ();

app.get("/outfit", (req, res) => {
    const tops = ["T-Shirt", "Sweater", "Button-Up"];
    const bottoms = ["Shorts", "Pants", "Jeans"];
    const shoes = ["Sneakers", "Sandals", "Boots"];
    res.send("Homepage working")
});

app.listen(3000, () => console.log("Server is up and running"))