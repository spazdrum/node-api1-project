const express = require("express");
const shortid = "shortid";
const server = express();
server.use(express.json);

let users = [];

// GET / Handler

server.get("/", (req, res) => {
  res.json({ message: "Hello User!" });
});

//-------------------------//
//  POST - Crud - Create
//-------------------------//

server.post("/api/users", (req, res) => {
  const userInfo = req.body;
  //body validation
  function validateBody(body) {
    //body validation
    return true;
  }

  if (validateBody(body)) {
    userInfo.id = shortid.generate();
    users.push(userInfo);
    res.status(201).json(userInfo);
  } else {
    res
      .status(400)
      .json({ errorMessage: "Please provide name and bio for the user." });
  }
});

//-------------------------//
//    GET - cRud - Read
//-------------------------//

server.get("api/users", (req, res) => {
  const users = [
    {
      id: { shortid },
      name: "Jane Doe",
      bio: "Not Tarzans wife, another Jane",
    },
    {
      id: { shortid },
      name: "John Doe",
      bio: "I'm the one that everyone remembers but never sees",
    },
  ];

  res.status(200).json(users);
});

//--------------------------//
//  DELETE - cruD - Delete
//--------------------------//

server.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const found = users.find((users) => users.id === id);
  if (found) {
    users = users.filter((users) => users.id !== id);
    res.status(200).json(found);
  } else {
    res.status(404).json({ message: "user not found" });
  }
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
