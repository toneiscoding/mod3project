
const express = require('express');
const dotenv = require('dotenv');
const cors = require("cors")
dotenv.config(); 
require('./config/database.js')
// lets us do process.env (get variables from .env file)

//connect mongoDB
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

const Entry = require('./models/Entries')

const app = express();
app.use(express.json());
app.use(cors())

//create- create entry
app.post('/entries', async (req, res) =>{
    console.log("creating entries");
    let databaseResponse = await Entry.create(req.body);
    res.send(databaseResponse)
})
//read- get all entries from database
app.get('/entries', async (req, res) =>{
    console.log("create route");
    let response = await Entry.find()
    console.log("this is getting all entries")
    res.send(response)
})
//update
app.put('/entries/:id/', async (req, res) =>{
    const id = req.params.id;
    const newContent= req.body;
    let databaseResponse = await Entry.findByIdAndUpdate(id, newContent)
    res.send(databaseResponse)
    console.log("this has been updated")
})
//delete
app.delete('/entries/:id', async (req, res) =>{
    console.log("create route");
    const id = req.params.id;
    let databaseResponse = await Entry.findByIdAndDelete(id)
    res.send(databaseResponse)
    
})


app.listen(4001, () => {
    console.log("listening on 4001")
})