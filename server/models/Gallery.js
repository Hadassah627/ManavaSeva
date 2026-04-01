const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    image: { type: String, required: true },
    category: { type: String, default: 'events' },
    caption: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Gallery', gallerySchema);
