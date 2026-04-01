const express = require('express');
const { body, validationResult } = require('express-validator');
const Gallery = require('../models/Gallery');
const { auth, requireAdmin } = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, requireAdmin, [
    body('image').isURL().withMessage('Image URL is required'),
    body('category').optional().isString()
], async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const item = new Gallery(req.body);
        await item.save();
        res.json(item);
    } catch (err) { next(err); }
});

router.get('/', async (req, res, next) => {
    try {
        const items = await Gallery.find().sort({ createdAt: -1 });
        res.json(items);
    } catch (err) { next(err); }
});

module.exports = router;
