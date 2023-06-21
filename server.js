const express= require("express");
const app= express();
const PORT=3000||process.env.PORT;
const bodyParser= require('body-parser')

require('./Db/db')
const RegCollection= require('./models/Register')
const path= require('path')
const jwt = require("jsonwebtoken");

const bcryptjs = require("bcryptjs");

const template_path=path.join(__dirname,'/views');
app.set('view engine','hbs')
app.use(bodyParser.json)

app.post('/api/register',async(req,res)=>{
  console.log(req)
  res.json({status: 'ok'})
})

app.listen(PORT,()=>{
  console.log(`Listening to Port ${PORT}`);

});