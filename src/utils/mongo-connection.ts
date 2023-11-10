import mongoose from "mongoose";
import connectToMongoDbWithMongoose from "./mongoose-conection";

const getMongoUri = (): string|null => {
    console.log('here')
    console.log('process.env.ATALS_MONGO_USERNAME: ', process.env.ATLAS_MONGO_USERNAME);
    if (process.env.ATLAS_MONGO_USERNAME && process.env.ATLAS_MONGO_PASS && process.env.ATLAS_MONGO_CLUSTER) {
        const username = encodeURIComponent(process.env.ATLAS_MONGO_USERNAME || "<username>");
        const password = encodeURIComponent(process.env.ATLAS_MONGO_PASS || "<password>");
        const cluster = encodeURIComponent(process.env.ATLAS_MONGO_CLUSTER || "<clusterName>");

        console.log('username: ', username);

        return `mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority`;
    }

    return null;
}

export default async function connectToMongoDb(client: string): Promise<any> {
    const MONGO_URI =
        getMongoUri() || "mongodb://mongo:27017/default-db";
        console.log('MONGO_URI: ', MONGO_URI);
    
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