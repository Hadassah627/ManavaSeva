const express = require('express');
const { body, validationResult } = require('express-validator');
const Donation = require('../models/Donation');

const router = express.Router();

// POST /api/donations (mock)
router.post('/', [body('amount').isFloat({ gt: 0 })], async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
        const d = new Donation(req.body);
        await d.save();
        // Mock payment success
        res.json({ success: true, donation: d });
    } catch (err) { next(err); }
});

// GET donations (admin)
router.get('/', async (req, res, next) => {
    try {
        const list = await Donation.find().sort({ createdAt: -1 });
        res.json(list);
    } catch (err) { next(err); }
});

module.exports = router;
