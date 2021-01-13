const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Dette er plus lavet i node.js med express!");
});

app.get("/plus", (req, res) => {
  let left = req.query.left ? +req.query.left : 0;
  let right = req.query.right ? +req.query.right : 0;

  res.json({
    result: left + right,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
