import * as express from 'express'
import {Request, Response} from 'express'
import { connectToDb } from './utils/db'
import * as cors from 'cors'


async function main() {
    await connectToDb();
    
    const app = express()
    app.listen(5000)
    console.log('Listening to port: 5000')

    app.use(cors())
    app.use(express.json())

    app.get('/', (req: Request, res: Response) => {
        res.send('Hello from express')
    })
}

main();


