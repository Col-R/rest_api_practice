const fs = require("fs/promises");
const express = require ("express");
const cors = require ("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");

const app = express ();

app.listen(3000, () => console.log("Server is up and running"))