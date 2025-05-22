require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const connectToMongoDB = require('./connections/db')
const userRouter=require('./routes/user')
const serviceRouter=require('./routes/service')
const pricingRouter=require('./routes/pricing')
const reviewRouter=require('./routes/review')

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
  
//routes
app.use('/user',userRouter)
app.use('/service',serviceRouter)
app.use('/price',pricingRouter)
app.use('/review',reviewRouter)


app.listen(port, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${port}`);
});
