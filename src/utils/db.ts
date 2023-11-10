import connectToMongoDb from "./mongo-connection";

export async function connectToDb(): Promise<void> {

  try {
    await connectToMongoDb("mongoose");
  } catch (e) {
    console.error(e);
    process.exit(1);
  }

  console.log("Connected to MongoDB");
}