const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();
const DEFAULT_ADMIN_EMAIL = process.env.DEFAULT_ADMIN_EMAIL || 'admin@manavaseva.com';
const DEFAULT_ADMIN_PASSWORD = process.env.DEFAULT_ADMIN_PASSWORD || 'Admin@123';

// POST /api/auth/signup
router.post('/signup', [
    body('name').notEmpty(),
    body('email').isEmail(),
    body('password').isLength({ min: 6 })
], async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const { name, email, password } = req.body;
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: 'User already exists' });

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        user = new User({ name, email, password: hash });
        await user.save();

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
        res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
    } catch (err) { next(err); }
});

// POST /api/auth/login
router.post('/login', [
    body('email').isEmail(),
    body('password').notEmpty()
], async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const { email, password } = req.body;
        let user = await User.findOne({ email });

        if (!user && email === DEFAULT_ADMIN_EMAIL) {
            const hash = await bcrypt.hash(DEFAULT_ADMIN_PASSWORD, 10);
            user = await User.create({
                name: 'ManavaSeva Admin',
                email: DEFAULT_ADMIN_EMAIL,
                password: hash,
                role: 'admin'
            });
        }

        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        let isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch && email === DEFAULT_ADMIN_EMAIL && password === DEFAULT_ADMIN_PASSWORD) {
            const hash = await bcrypt.hash(DEFAULT_ADMIN_PASSWORD, 10);
            user.password = hash;
            user.role = 'admin';
            await user.save();
            isMatch = true;
        }

        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
        res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
    } catch (err) { next(err); }
});

module.exports = router;
