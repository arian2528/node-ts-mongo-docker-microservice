import mongoose from "mongoose";

export default async function connectToMongoDbWithMongoose(uri: string): Promise<typeof mongoose> {
    return await mongoose.connect(uri);  
}