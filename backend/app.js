const express = require('express');
const app = express();

var cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}))

const user = require('./user/userroutes');
app.use('./api/user',user)

app.listen(2000,()=>
{
    console.log('server is running');
    
})