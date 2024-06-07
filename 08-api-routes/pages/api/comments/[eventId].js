function handler(req, res) {
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

    const newCommemt = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };
    console.log(newCommemt);

    res.status(201).json({ message: "Added Comment", comment: newCommemt });
  }

  if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "Max", comment: "First comment" },
      { id: "c2", name: "Mahuel", comment: "Second comment" },
    ];
    res.status(200).json({ comment: dummyList });
  }
}
export default handler;
