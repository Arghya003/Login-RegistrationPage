const mongoose= require('mongoose');


mongoose.connect('mongodb://localhost:27017/regForm',).then(()=>{
    useNewUrlParser: true;
    useUnifiedTopology : true,
    console.log("Db Connected")
})
.catch((e)=>{
    console.log(e);
});
