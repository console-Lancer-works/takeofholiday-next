const express = require("express");
const next=require('next');
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");


const dev=process.env.NODE_ENV!=='production'
const server=next({dev})
const handle=server.getRequestHandler()
const { MONGOURI } = require("./key");
const Auth = require("./routes/auth");
const Tours = require("./routes/tours");


server.prepare().then(()=>{
    const app = express();
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection.on("connected", () => {
        console.log("mongo connection establish successfully");
      });
    mongoose.connection.on("error", () => {
        console.group("Mongoose connection failed");
      });
    app.use("/apis/auth", Auth);
    app.use("/apis/tour", Tours);
    app.get('*',(req,res)=>{
        return handle(req,res)
    })
    app.listen(3000, () => {
        console.log("server is running");
    });
})

