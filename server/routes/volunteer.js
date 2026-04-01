const express = require('express');
const { body, validationResult } = require('express-validator');
const Volunteer = require('../models/Volunteer');

const router = express.Router();

// POST /api/volunteer
router.post('/', [
    body('name').notEmpty(),
    body('email').isEmail()
], async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
        const v = new Volunteer(req.body);
        await v.save();
        res.json(v);
    } catch (err) { next(err); }
});

// GET /api/volunteer (admin)
router.get('/', async (req, res, next) => {
    try {
        const volunteers = await Volunteer.find().sort({ createdAt: -1 });
        res.json(volunteers);
    } catch (err) { next(err); }
});

module.exports = router;
