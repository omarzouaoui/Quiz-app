import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import router from "./router/route.js";

/**connection file */
import connect from "./database/conn.js";


const app = express();

/**middlewares*/
app.use(morgan('Page resfreshed'));
app.use(cors());
app.use(express.json());
config();

/**App PORT*/
const port = process.env.PORT || 8080;

/**routes*/
app.use("/api", router);/**apis */

app.get("/", (req, res) => {
    try {
        res.json("Get Request")
    } catch (err) {
        res.json(err);
    }
})

/**start sever only if with valid connection */
connect()
.then(() => {
    try{
        app.listen(port, () => {
            console.log(`Server Running on http://localhost:${port}`);    
        })
    }catch(err){
        console.log(err);
    }
})
.catch(err => {
    console.log(err)
})


