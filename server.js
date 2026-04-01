const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectDB = require('./server/config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);

        const allowed = [
            'http://localhost:3000',
            'http://localhost:5000',
            process.env.FRONTEND_URL
        ].filter(Boolean);

        const isVercelApp = /^https:\/\/[a-z0-9-]+\.vercel\.app$/i.test(origin);
        if (allowed.includes(origin) || isVercelApp) return callback(null, true);

        return callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

// Avoid long query buffer timeouts when DB is reconnecting.
app.use('/api', (req, res, next) => {
    if (mongoose.connection.readyState !== 1) {
        return res.status(503).json({ message: 'Database unavailable. Please retry in a few seconds.' });
    }
    return next();
});

// Routes
app.use('/api/auth', require('./server/routes/auth'));
app.use('/api/volunteer', require('./server/routes/volunteer'));
app.use('/api/projects', require('./server/routes/projects'));
app.use('/api/donations', require('./server/routes/donations'));
app.use('/api/gallery', require('./server/routes/gallery'));

app.get('/', (req, res) => res.send({ status: 'ManavaSeva API running' }));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ message: err.message || 'Server Error' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
