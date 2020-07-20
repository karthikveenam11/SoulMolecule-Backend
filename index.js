let express= require('express');
const app= express();
app.use(express.static('frontend'));
app.get('/',(req,res)=>{
res.send('index.html');
})
app.listen('3001',()=>{

    console.log('App is loistening')
})