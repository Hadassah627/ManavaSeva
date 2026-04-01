const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
dotenv.config();
const connectDB = require('./config/db');
const Project = require('./models/Project');
const Volunteer = require('./models/Volunteer');
const User = require('./models/User');

async function seed() {
    await connectDB();
    await Project.deleteMany({});
    await Volunteer.deleteMany({});

    const projects = [
        { title: 'Education for All', description: 'Supporting rural education', image: '/assets/edu.jpg', category: 'education' },
        { title: 'Clean Water Initiative', description: 'Installing water filters', image: '/assets/water.jpg', category: 'health' },
        { title: 'Women Empowerment', description: 'Skill training and microloans', image: '/assets/women.jpg', category: 'community' }
    ];

    await Project.insertMany(projects);
    console.log('Seeded projects');

    const adminEmail = 'admin@manavaseva.com';
    const adminPassword = 'Admin@123';
    const existingAdmin = await User.findOne({ email: adminEmail });
    if (!existingAdmin) {
        const hash = await bcrypt.hash(adminPassword, 10);
        await User.create({ name: 'ManavaSeva Admin', email: adminEmail, password: hash, role: 'admin' });
        console.log('Created default admin user (admin@manavaseva.com / Admin@123)');
    } else {
        console.log('Default admin user already exists');
    }

    process.exit(0);
}

seed().catch(err => { console.error(err); process.exit(1); });
