import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from "../../../helpers/db-util";

const COLLECTION_NAME = "comments";
async function handler(req, res) {
  const eventId = req.query.eventId;

  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to database failed" });
    return;
  }

  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (
      !email.includes("@") ||
      !name.trim() === "" ||
      !text ||
      !text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }

    try {
      const newCommemt = { eventId, email, name, text };
      const result = await insertDocument(client, COLLECTION_NAME, newCommemt);
      newCommemt._id = result.insertedId;
      res.status(201).json({ message: "Added Comment", comment: newCommemt });
    } catch (error) {
      res.status(500).json({ message: "Inserting comments failed" });
    }
  }

  if (req.method === "GET") {
    try {
      const asceSort = { _id: -1 };
      const document = await getAllDocuments(
        client,
        COLLECTION_NAME,
        asceSort,
        { eventId: eventId }
      );
      res.status(200).json({ comment: document });
    } catch (error) {
      res.status(500).json({ message: "Getting comments failed" });
    }
  }
  client.close();
}
export default handler;
