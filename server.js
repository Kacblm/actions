const express = require ("express");
const app = express();

app.get("/", (req,res) => {
    res.send({ msg: "Ready"})
});

app.listen(8080,()=> {
    console.log('Server in running on 8080');
});