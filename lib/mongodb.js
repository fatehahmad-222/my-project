import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URL;

let client;
let clientPromise;

client = new MongoClient(uri);
clientPromise = client.connect();

export default clientPromise;