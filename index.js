require('dotenv').config()


const express = require ('express')
const app = express()
const port = 4000
app.get('/',(req, res)=>{
    res.send("bng")
})
app.get('/hello', (req, res)=>{
    res.send("hhhhhhhh")
})
app.listen(process.env.PORT, ()=>{
    console.log(`Server running in ${port}`);
})