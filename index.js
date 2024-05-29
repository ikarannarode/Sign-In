import express from "express"
import path from "path"
import { config } from "dotenv"
config({ path: ".env" })
const app = express();
const users = [];
//middlewares
app.use(express.static(path.join(path.resolve(), "public")))
app.use(express.urlencoded({ extended: true }))
// setting up view Engine
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.render("index");
})
app.get("/success", (req, res) => {
    res.render("success");
});
app.get("/users", (req, res) => {
    res.json(users,)
})
app.post("/", (req, res) => {
    console.log(req.body.name)
    users.push({ name: req.body.name, email: req.body.email, password: req.body.password })


    res.redirect("/success");
})
app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
});

















