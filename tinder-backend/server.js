import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";

// App Config
const app = express();
const port=process.env.PORT || 8001;
const connection_url='mongodb+srv://Rohan:rmk9930042066@cluster0.ts9kw.mongodb.net/tinderDB?retryWrites=true&w=majority'

// Middlewares
app.use(express.json());
app.use(Cors());

// DB Config
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
});
const connection=mongoose.connection;
connection.once("open",()=>{
    console.log("MongoDB Database connection established succesfully");
});

// API Endpoints
app.get("/", (req, res) => {
    res.status(200).send("Hello World !")
});

app.post("/tinder/cards", (req,res)=>{
    const dbCard=req.body;
    Cards.create(dbCard, (err, data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
});

app.get("/tinder/cards", (req,res)=>{
    Cards.find((err, data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
});

// Listener
app.listen(port, ()=>{
    console.log(`Server is running on localhost://${port}`);
})