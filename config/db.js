const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/manavaseva';
        await mongoose.connect(uri);
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error', err.message);
        // Keep service alive on transient DB/network issues and retry.
        setTimeout(connectDB, 5000);
    }
};

module.exports = connectDB;
