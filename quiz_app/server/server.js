import express from "express";

const app = express();

/**routes*/
app.get("/", (req, res) => {
    try {
        res.json("Get Request")
    } catch (err) {
        res.json(err);
    }
})