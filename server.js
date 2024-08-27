const express = require("express");
const path = require("path");

// Jika port conflict, maka ubah variabel ini menjadi port yang tidak conflict misalnya port 5000
const port = 3000

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/data.json", (req,res) => {
    res.sendFile(path.resolve(__dirname, "data.json"))
})

// Route for home page
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

// Route for product pages with dynamic id
app.get("/product/:id", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

// Route for products pages with params
app.get("/product", (req, res) => {
    if (!req.query.hasOwnProperty("search")) {
        res.sendFile(path.resolve(__dirname, "frontend", "404.html"));
    }
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});


app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "404.html"));
});

app.listen(port, () => {
    console.log("Server running on port " + port)
});
