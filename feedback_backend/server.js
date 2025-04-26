const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const feedbackRouter = require('./routes/feedbackRoutes.js');
const connectDB = require('./config/database.js')

require('dotenv').config()
connectDB()

 
const app = express(); 
const port = process.env.PORT || 5000;


app.use(json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to the User Feedback System API!');
});

app.use('/feedback', feedbackRouter);


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});