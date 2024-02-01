const mongoose = require('mongoose');
const appconfig = require('./appconfig');

const connectDB = async () => {
    try {
        await mongoose.connect(appconfig.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('MongoDB Connected Successfully');
    } catch (error) {
        console.error(`MongoDB connection error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;