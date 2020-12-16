const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const authRouter = require("./auth/auth-router");
const session = require("express-session");

//const KnexSessionStore = require("connect-session-knex")(session);

const server = express();

//server.use(session(config));
server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.json({ message: "Server is LIVE" });
});

module.exports = server;
