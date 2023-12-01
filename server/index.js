//imports from packages
const express = require('express');
const mongoose=require('mongoose');
const app = express();
const PORT=3000;
const DB="mongodb+srv://raguraman:raguraman@cluster0.nfqy7u4.mongodb.net/?retryWrites=true&w=majority";
app.use(express.json())
//imports from other files
const authRouter=require('./routes/auth.js');
//middleware
app.use(authRouter)

//db connections
mongoose.connect(DB).then(()=>{
console.log('connection successful')
}).catch((e)=>console.log(e))

//create server to handle req and res at port 3000 and localhost
app.listen(PORT, ()=>{
console.log(`Server is running on port ${PORT}`)
})
