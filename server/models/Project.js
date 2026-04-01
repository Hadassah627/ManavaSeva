const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    category: { type: String, default: 'general' },
    status: { type: String, default: 'Planned' }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
