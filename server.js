const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "build")));

// Parse POST requests response body
app.use(bodyParser.json());

// Post request for the current mode selected by user in the setup form
app.post("/api/mode", function (req, res) {
  console.log(req.body);

  // check validity of response received
  const valid =
    req.body.mode &&
    (req.body.mode === "test" || req.body.mode === "production");

  // valid: res = Accepted, Invalid: res = Bad request
  return res.send(valid ? "Accepted" : "Bad request");
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080);
