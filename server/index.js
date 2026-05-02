let express = require('express')
let mongoose = require('mongoose');
let cors = require('cors');
const enquiryRoutes = require('./App/Router/Web/enquiryRouters');
require('dotenv').config();
let app = express();
app.use(cors())
app.use(express.json())

app.use("/api/website/enquiry", enquiryRoutes)  

// http://localhost:8000/api/website/enquiry/insert


mongoose.connect(process.env.DBurl).then(()=>{
    console.log('connected to mongoDb')
    app.listen(process.env.PORT || 3000 ,()=>{
        console.log('Server is running ')
    });
}).catch((err)=>{
    console.log('Error',err)
})