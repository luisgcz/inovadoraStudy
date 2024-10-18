const express = require('express')

const app = express();

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:false}))

app.post('/sendMessage', (req,res)=> {
    console.log(req.body)
})

app.get('/', (req,res)=>{
    res.render('index.ejs')
})

app.listen(3000,()=>{
    console.log("Server is lestening on a port 3000")

})

