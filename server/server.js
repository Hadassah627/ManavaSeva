const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

const corsOptions = {
    origin: [
        'http://localhost:3000',
        'http://localhost:5000',
        'https://manavaseva.vercel.app',
        process.env.FRONTEND_URL || 'http://localhost:3000'
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/volunteer', require('./routes/volunteer'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/donations', require('./routes/donations'));
app.use('/api/gallery', require('./routes/gallery'));

app.get('/', (req, res) => res.send({ status: 'ManavaSeva API running' }));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ message: err.message || 'Server Error' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
