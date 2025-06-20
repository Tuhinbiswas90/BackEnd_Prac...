const express =  require('express')
const app = express()
const port=4550;

//inbuilt middleware
// app.use(express.json());

// //creating middleware--logging , authentication(auth), validation
// const loggingMiddleware = function (req,res,next){
//     console.log("Logging kar raha huu..")
//     next();
// }


// const authMiddleware = function (req,res,next){
//     console.log("authentication kar raha huu..")
//     next();
// }



// const validationMiddleware = function (req,res,next){
//     console.log("validate kar raha huu..")
//     next();
// }


// //loading middleware into the application
// app.use(loggingMiddleware);
// app.use(authMiddleware);
// app.use(validationMiddleware);

const route=require("./routes/route")
//mounting the routes
app.use('/api',route)

// -> /api/student
// -> /api/admin

app.get('/', (req, res) => {
    console.log("Main route handler hu...")
    console.log(req.body)
  res.send('Hello World!')
})

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})