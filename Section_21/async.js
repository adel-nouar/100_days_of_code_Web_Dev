const fs = require("fs/promises");

function readFile() {
    let fileData;
    // fs.readFile("data.txt", function (error, fileData) {
    //     console.log("File parsing done!");
    //     console.log(fileData.toString());
    // });
    fs.readFile("data.txt").then(function (fileData) {
        console.log("File parsing done!");
        console.log(fileData.toString());
    });
    console.log("Hi there!");
}

readFile();
