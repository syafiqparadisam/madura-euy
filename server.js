const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/data.json", (req,res) => {
    res.sendFile(path.resolve(__dirname, "data.json"))
})


// Route for home page
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

// Route for product pages with dynamic id
app.get("/product/:id", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});


app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "404.html"));
});

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));
