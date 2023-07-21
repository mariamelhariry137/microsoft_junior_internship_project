const express = require("express");
var objs = require("./room")
var game = objs.game
var User = objs.user
const app = express();
app.use(express.json());
function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
app.listen(3000, () => console.log("API server is running...",));

let Rooms = {};

app.get("/create-room", (req, res) => {
    var code = generateRandomIntegerInRange(1000, 10000)
    while (Rooms.hasOwnProperty(code)) {
        var code = generateRandomIntegerInRange(1000, 10000)
    }
    Rooms[`${code}`] = new game(code)
    res.json(Rooms[`${code}`])
});
app.get("/debug-game/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (!Rooms.hasOwnProperty(`${id}`)) {
        res.status(404)
        return
    }
    res.json(Rooms[`${id}`])
})
app.get("/started/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (!Rooms.hasOwnProperty(`${id}`)) {
        res.status(404)
        return
    }
    return res.send(Rooms[`${id}`].started)
})
app.post("/enter-room/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (!Rooms.hasOwnProperty(`${id}`)) {
        res.status(404)
        return
    }
    let username = req.body.username
    let userid = generateRandomIntegerInRange(1000, 10000)
    let user = new User(1000, userid,username)
    if (!Rooms[`${id}`].add_user(user)) {
        res.send("User Limit Reached!")
        return
    }   
    res.json(user)
})
app.post("/actions/buy/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (!Rooms.hasOwnProperty(`${id}`)) {
        res.status(404)
        return
    }
    const stock = parseInt(req.body.stock)
    const amount = parseInt(req.body.amount)
    const user_id = req.body.id

    res.json(Rooms[`${id}`].buy_stock(user_id, amount, stock))
})

app.post("/actions/sell/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (!Rooms.hasOwnProperty(`${id}`)) {
        res.status(404)
        return
    }
    const stock = parseInt(req.body.stock)
    const amount = parseInt(req.body.amount)
    const user_id = req.body.id

    res.json(Rooms[`${id}`].sell_stock(user_id, amount, stock))
})
app.get("/leaderboard/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (!Rooms.hasOwnProperty(`${id}`)) {
        res.status(404)
        return
    }
    res.json(Rooms[`${id}`].leaderboard())
})
