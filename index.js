require('dotenv').config()
const express=require('express')
const app=express()
const port=process.env.PORT;

app.get('/',(req,res)=>{
    res.send('Hello world!');
})

app.get('/twitter',(req,res)=>{
    res.send('jeetdotcom');
});

app.get('/login',(req,res)=>{
    res.send('<h1> please login at chai aur code</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>Chai Aur Code</h2>")
})
app.listen(port,()=>{
    console.log(`app running on http://localhost:${port}`);
    
})
digitalocean,heroku,railway,seenode, render,cyclic