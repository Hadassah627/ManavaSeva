const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
    try {
        const header = req.headers.authorization || '';
        const token = header.startsWith('Bearer ') ? header.substring(7) : null;
        if (!token) return res.status(401).json({ message: 'Authentication required' });

        const payload = jwt.verify(token, process.env.JWT_SECRET || 'secret');
        const user = await User.findById(payload.id).select('-password');
        if (!user) return res.status(401).json({ message: 'Invalid token' });

        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
};

const requireAdmin = (req, res, next) => {
    if (req.user?.role !== 'admin') {
        return res.status(403).json({ message: 'Admins only' });
    }
    next();
};

module.exports = { auth, requireAdmin };
