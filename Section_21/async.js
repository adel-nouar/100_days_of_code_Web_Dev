const fs = require("fs/promises");

async function readFile() {
    let fileData;
    // fs.readFile("data.txt", function (error, fileData) {
    // if (error) {
    // }
    //     console.log("File parsing done!");
    //     console.log(fileData.toString());
    // });
    try {
        fileData = await fs.readFile("data.txt");
    } catch (error) {
        console.log(error);
    }
    console.log("File parsing done!");
    console.log(fileData.toString());
    console.log("Hi there!");
}

readFile();
