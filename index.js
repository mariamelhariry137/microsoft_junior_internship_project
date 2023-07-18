const express = require("express");

const app = express();

app.listen(3000, () => console.log("API server is running...",));

let test = [];

app.get("/test",(req,reg)=>{
reg.json(test);
});

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