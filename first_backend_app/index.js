//including express module and initailising an app
const express=require('express');
const app=express();

//variable that stores the port number
const port=4500;

app.get('/',(req,res) => {
    res.send('Hello World!')
})

//start your app or server
app.listen(port,() =>{
    console.log(`server is running on port ${port}`);
})