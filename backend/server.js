const express = require('express');

const app = express();

app.get("/", (req,res) => {
    // root route http://localhost:5000/
    res.send("Ready");
    
});

app.listen(5000,() => console.log('Running on 5000'));