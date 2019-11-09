const express = require("express");
const hbs = require("hbs");
const path = require("path");
const server = express();
const port = 5000;

server.use(express.static(path.join(__dirname, "public"))); //rock solid syntax
server.set("views", path.join(__dirname, "views"));
server.set("view engine", "hbs");

//home
server.get("/", (request, response) => {
  response.render("home", {
    title: "Travel with Noémie",
    css: ["home", "layout"]
  });
});

//about
server.get("/about", (request, response) => {
  response.render("about", {
    title: "About us",
    css: ["about"]
  });
});

//booking
server.get("/booking", (request, response) => {
  response.render("booking", {
    title: "Turn a trip into an adventure",
    css: ["booking"]
  });
});

//signIN
server.get("/signIn", (request, response) => {
  response.render("signIn", {
    title: "Sign in and get access to our offers",
    css: ["signIn"]
  });
});
server.listen(port);
console.log(server);
