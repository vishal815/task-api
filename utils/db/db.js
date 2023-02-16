const mongoose = require('mongoose');

const connectDB = async (url) => {
    try {
        
        mongoose.connect(url, () => {
            console.log('connection to mongoDB is successful');
        });

    } catch (error) {
        
        console.log(error.message);

    }
};

module.exports = connectDB;