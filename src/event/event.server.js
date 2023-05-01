const express = require("express");
const server = express();
const PORT = process.env.PORT || 3000;

server.set("json spaces", 2);
module.exports.server = (json) => {
  server.get("*", async (req, res) => {
    res.json(json);
  });
}

server.listen(PORT, () => console.log(`Server running with port ${PORT}!`));