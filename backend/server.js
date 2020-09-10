require("dotenv").config();
const express = require ('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 1000;

mongoose.connect(process.env.MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected',() =>{
    console.log("Hey Your db connected so dont worry only you application enjoy ")
})

mongoose.connection.on('error',(err)=>{
    console.log("error while connecting db please check me")
})

// require('./models/user')
// require('./models/home')

app.use(express.json())
app.use(cors());
// app.use(require('./routes/user'))
// app.use(require('./routes/home'))

app.listen(port,()=>
    console.log(`server running on port ${port}`));