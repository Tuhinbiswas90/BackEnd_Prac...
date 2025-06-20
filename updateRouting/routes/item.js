// ye file saare item specific routes ko store karegi

const express=require('express')
const router = express.Router()

//middleware that is specific to this router
// const timeLog=(req, res,next) => {
//     console.log('Time: ', Date.now())
//     next()
// }
// router.use(timeLog)

router.get('/', (req,res) => {
    res.send('Got a GET Request')
    // res.sendFile('../dummy.html' , {root:__dirname})
})

router.post('/items',(req,res) => {
    // res.send('Got a POST request')
    res.json({x:1, y:2, z:3})
})

router.put('/items/:id', (req,res) => {
    res.send('Got a PUT request')
})

router.delete("/items/:id",(req,res) => {
    res.send('Got a DELETE request')
})


module.exports = router