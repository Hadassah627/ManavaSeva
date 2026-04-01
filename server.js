const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./server/config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

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
