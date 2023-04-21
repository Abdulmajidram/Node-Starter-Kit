const express = require("express");
const app = express();
const port = 9090;

app.get("/", function (request, response) {
    console.log("Salam world");
    response.send("Salam world you got a response from me");

});
app.listen(port, function () {
  console.log("Server is listening on port 9090. Ready to accept requests!");
});
