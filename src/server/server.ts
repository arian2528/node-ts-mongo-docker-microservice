import cors from "cors";
import express from "express";
import { connectToDb } from '../utils/db'

export default async function createServer() {
    await connectToDb();
    const app = express();

    app.use(cors())
    app.use(express.json())

    app.get("/", (req: express.Request, res: express.Response) => {
        res.send("Hello from express arian");
    });

    return app;
}

