import mongoose from "mongoose";
import connectToMongoDbWithMongoose from "./mongoose-conection";

const getMongoUri = (): string|null => {
    
    if (process.env.DB_USER && process.env.DB_PASS && process.env.DB_DOMAIN) {
        const username = encodeURIComponent(process.env.DB_USER || "<username>");
        const password = encodeURIComponent(process.env.DB_PASS || "<password>");
        const cluster = encodeURIComponent(process.env.DB_DOMAIN || "<clusterName>");

        return `mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority`;
    }

    return null;
}

export default async function connectToMongoDb(client: string): Promise<any> {
    const MONGO_URI =
        getMongoUri() || "mongodb://mongo:27017/default-db";
        console.log('DB_URI: ', MONGO_URI);
    
    switch (client) {
        case 'mongoose': 
            return await connectToMongoDbWithMongoose(MONGO_URI);
            break;
        case 'mongo-client': 
            return await connectToMongoDbWithMongoose(MONGO_URI);
            break;    
    
        default:
            return await connectToMongoDbWithMongoose(MONGO_URI);
            break;
    }
}