const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config()

if(process.env.NODE_ENV != "development"){
    app.use(express.static(path.join(__dirname, 'front/build')));

    app.get("*", (req,res)=>{
        res.sendFile(path.join(__dirname, 'front/build/index.html'))
    });     
}



console.log("running")
// app.listen(3001, ()=>{
//     console.log("running")
// });


