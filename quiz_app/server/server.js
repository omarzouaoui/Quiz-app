import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";

const app = express();

/**middlewares*/
app.use(morgan('Page resfreshed'));
app.use(cors());
app.use(express.json());
config();

/**App PORT*/
const port = process.env.PORT || 8080;

/**routes*/
app.get("/", (req, res) => {
    try {
        res.json("Get Request")
    } catch (err) {
        res.json(err);
    }
})

app.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}`);    
} )