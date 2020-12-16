const db = require("../../data/dbConfig");

module.exports = {
  addUser(data) {
    return db("users").insert(data);
  },
};
