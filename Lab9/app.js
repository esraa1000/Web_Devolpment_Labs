const express = require('express');
const app = express();
const courseRouter = require('./router');
const mongoose = require('mongoose');

app.use(express.json());
app.use('/courses', courseRouter);

const uri = "mongodb://127.0.0.1:27017/lab9_web";

const databaseConnect = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Successful DB connection");
    } catch (error) {
        console.log("Error:", error);
    }
};

databaseConnect();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
 
