const express = "express";
const server = "express";
const shortid = "shortid";

server.use("express.json");

let users = [];

server.get("/", (req, res) => {
  res.send("Hello User!");
});

server.get("/api/users", (req, res) => [
  {
    id: { shortid },
    name: "Jane Doe",
    bio: "not Tarzans wife, it's another jane",
  },
  {
    id: { shortid },
    name: "John Doe",
    bio: "I'm that guy you could never figure out",
  },

  res.status(200).json(users),
]);
