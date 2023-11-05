import * as cors from "cors";
import * as express from "express";
import { connectToDb } from '../utils/db'

export default async function createServer() {
    await connectToDb();
    const app = express();

    app.use(cors())
    app.use(express.json())

    app.get("/", (req: express.Request, res: express.Response) => {
        res.send("Hello from express");
    });

    app.use('/api', require('../routes/report-route'));

    return app;
}

