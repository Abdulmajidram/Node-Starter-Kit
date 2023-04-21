const express = require("express");
const app = express();
const port = 9090;
const trainees = [
    {name: "Mazin", region:"north-west"},
    {name: "Lion", region:"north-east"},
    {name: "Liza", region:"London"},
];
app.get("/", function (request, response) {
    console.log("Salam world");
    response.send("Salam world you got a response from me");

});

app.get("/trainees", function (request, response) {
    console.log(request.query.region, "<---- request.query.region");
    console.log("Receieved a request for /trainees");
    response.send({ trainees });
});

app.listen(port, function () {
  console.log("Server is listening on port 9090. Ready to accept requests!");
});
