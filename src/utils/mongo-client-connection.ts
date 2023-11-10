import { MongoClient, MongoClientOptions, ServerApiVersion } from "mongodb";

export default async function connectToMongoDbWithMongoClient(uri: string): Promise<any> {
    const options: MongoClientOptions = { serverApi: ServerApiVersion.v1 };
    const client = new MongoClient(uri, options);
    
    return await client.connect();  
}