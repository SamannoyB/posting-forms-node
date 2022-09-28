const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get('/' (req, res) => {
       res.render("app").status(200);
})

app.post('/post', (req, res) => {
       console.log(req.body);
});

app.listen(3000, () => console.log("Server running on port 3000"));
