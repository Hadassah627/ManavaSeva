const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    amount: { type: Number, required: true },
    message: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Donation', donationSchema);
