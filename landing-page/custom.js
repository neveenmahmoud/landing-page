const express = require ('express')
const app = express()
const path = require ('path')
const port = 5000
app.get('/about/:id' , function(req , res ){
    // res.send('<h1>hello world</h1>')


    // let pathname = path.join(__dirname, 'index.html')
    // res.sendFile(pathname)

    
    let id = req.params.id
    let key = req.query.key
    res.send(`your id is ${id} and your key ${key}`)

})
 app.listen(port , function(){
     console.log(`listen to ${port}`)
 })