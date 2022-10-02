var express = require("express");

let app = express();
const SERVER_PORT = 8080;

app.get("/", (req, res) => {
  res.send("<h1> GET  welcome to  my lab exercise 4  </h1>");
});

app.get("/hello", (req, res) => {
  res.send("<h1>  Hello Express JS </h1>");
});

//QueryString Parameter
//http://localhost:8080/user?firstName=Pritesh&lastNamem=Patel
app.get("/user", (req, res) => {
  res.send({ ...req.query });
});

//Path OR Route Parameter
//http://localhost:8080/user/Pritesh/Patel
app.post("/user/:pfnm/:plnm", (req, res) => {
  const result = {
    first_name: req.params.pfnm,
    last_name: req.params.plnm,
  };
  res.send(result);
});

app.listen(SERVER_PORT, () => {
  console.log("server running at htpp://localhost:%s", SERVER_PORT);
});
