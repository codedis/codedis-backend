import express from "express";
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => res.send("Hello World"));

app.listen(port);

console.log(`Listening to localhost:${port}`);
