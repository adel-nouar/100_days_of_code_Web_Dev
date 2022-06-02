const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/currenttime", function (req, res) {
    res.send("<h1>" + new Date().toISOString() + "</h1>");
});

app.get("/", function (req, res) {
    res.send(
        "<form action='/store-user' method='POST'><label>Your Name</label> <input type='text' name='username'><button>Submit</button></form>"
    );
});

app.post("/store-user", function (req, res) {
    const userName = req.body.username;
    console.log(userName);
    res.send("<h1>Username stored!</h1>");
});

app.listen(3000);

// function handleRequest(request, response) {
//     if (request.url === "/currenttime") {
//         response.statusCode = 200;
//         response.end("<h1>" + new Date().toISOString() + "</h1>");
//     } else if (request.url === "/") {
//         response.statusCode = 200;
//         response.end("<h1>Hello World!</h1>");
//     } else {
//         response.statusCode = 404;
//         response.end("<h1>Page doesn't exists</h1>");
//     }
// }

// const server = http.createServer(handleRequest);

// server.listen(3000);
