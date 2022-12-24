const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>This is the HOME page.</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>This is the ABOUT page.</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>This is the CONTACT page.</h1>");
});

app.listen(3000, () => {
  console.log("got connected!!!!");
});
