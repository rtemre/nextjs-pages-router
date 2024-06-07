import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await new MongoClient(
    "mongodb+srv://dbUser:dbPassword@cluster0.dcaaf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  ).connect();
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db("events");
  return await db.collection(collection).insertOne(document);
}

export async function getAllDocuments(client, collection, sort, filter = {}) {
  const db = client.db("events");
  return await db.collection(collection).find(filter).sort(sort).toArray();
}
