const express= require("express");
const app= express();
const PORT=3000||process.env.PORT;


require('./Db/db')
const RegCollection= require('./models/Register')
const path= require('path')

const template_path=path.join(__dirname,'/views');
app.set('view engine','hbs')

app.use(express.urlencoded({extended: false}))
app.set('views',template_path)

 app.get('/',(req,res)=>{
    res.render('index')
 })

 app.post('/data',async(req,res)=>{
  try{
    const password = req.body.password;
    const cpassword = req.body.cpassword;

    if (password === cpassword) {
      const datacollection = new RegCollection({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        class: req.body.class,
        stream: req.body.stream,
        password: req.body.password,
        cpassword: req.body.cpassword,
      });
      const postData = await datacollection.save();
      res.send(postData);
    } else {
      res.send("password not matching");
    } 
  }
  catch(E){
    console.log(E)
  }
 })


app.listen(PORT,()=>{
  console.log(`Listening to Port ${PORT}`);

});