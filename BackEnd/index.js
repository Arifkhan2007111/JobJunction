const Express = require('express')
const app = Express()

app.use('/', (req, res) =>{
    res.send("Hello")
})

const PORT = 8000

app.listen(PORT, ()=>{
    console.log('Backend is running on port:', PORT)
})