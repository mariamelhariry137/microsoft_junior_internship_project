const express = require("express");
var game = require("./room")
const app = express();
function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
app.listen(3000, () => console.log("API server is running...",));

let Rooms = {};

app.get("/create-room",(req,res)=>{
    var code = generateRandomIntegerInRange(1000,10000)
    Rooms[`${code}`] = new game(code)
    res.json(Rooms)
});

app.post("/enter-room/:id",(req,res) =>{
    const id = parseInt(req.params.id);
    if(!Rooms.hasOwnProperty(`${id}`)){
        res.status(404)
        return
    }
    let user = generateRandomIntegerInRange(1000,10000)
    if(!Rooms[`${id}`].add_user(user)){
        res.send("User Limit Reached!")
        return
    }
    res.send(`${user}`)
})

app.post("/test",(req,reg)=>{
    const test  = {
        id: test.length + 1,
        title: req.body.title,
    };
    test.push(test);
    res.status(201).json(test);
    });
app.get('/hi',(req,res)=>{
    res.send('hi')
})
app.put ("/test/:id",(req,reg)=>{
    const id = parseInt(req.params.id);
    const test = test.find((t)=> t.id==id);
    if (!test){
        return res.status(404).json({error: "test not found"});
    }
    test.title = req.body.title||test.title;
    res.json(test);
});

app.delete("/test/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const test = test.find((t)=> t.id==id);
    if (index == -1){
        return res.status(404).json({error: "test not found"});
    }
    test.splice(index,i);
    res.status(204).json(test);
});