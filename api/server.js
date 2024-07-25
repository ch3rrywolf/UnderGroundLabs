require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.SERVER_PORT | 3500;

app.use(express.static('public'))

app.use(cors({
    origin:'*'
}));


app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');

const userRoute = require('./routes/userRoute');
app.use('/api', userRoute);

const authRoute = require('./routes/authRoute');
app.use('/', authRoute);


const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

connectMongoDB();

app.listen(port, function(){
    console.log('Server Listen on port'+port);
});