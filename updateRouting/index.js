const express =  require('express')
const app = express()
const port=4000

// app.get('/',(req,res) => {
//     res.send('Hello World!')
// })

//story of request

// app.get('/', (req,res) => {
//     // res.send('Got a GET Request')
//     res.sendFile('./dummy.html' , {root:__dirname})
// })

// app.post('/items',(req,res) => {
//     // res.send('Got a POST request')
//     res.json({x:1, y:2, z:3})
// })

// app.put('/items/:id', (req,res) => {
//     res.send('Got a PUT request')
// })

// app.delete("/items/:id",(req,res) => {
//     res.send('Got a DELETE request')
// })


        //upar ka sab comment hai kyun ki ye sab abb another file se call hoga


//import item's router file
const item=require('./routes/item');
//load into application
app.use('/api',item);

// -> /api/ -> item home page
// -> /api/items -> item post request
// -> /api/items/id -> put/delete request


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})