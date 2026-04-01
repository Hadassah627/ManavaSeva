const express = require('express');
const { body, validationResult } = require('express-validator');
const Project = require('../models/Project');
const { auth, requireAdmin } = require('../middleware/auth');

const router = express.Router();

// Create project
router.post('/', auth, requireAdmin, body('title').notEmpty(), async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
        const p = new Project(req.body);
        await p.save();
        res.json(p);
    } catch (err) { next(err); }
});

// Read all with optional search/filter
router.get('/', async (req, res, next) => {
    try {
        const { q, category } = req.query;
        const filter = {};
        if (category) filter.category = category;
        if (q) filter.$or = [{ title: new RegExp(q, 'i') }, { description: new RegExp(q, 'i') }];
        const projects = await Project.find(filter).sort({ createdAt: -1 });
        res.json(projects);
    } catch (err) { next(err); }
});

// Get single
router.get('/:id', async (req, res, next) => {
    try {
        const p = await Project.findById(req.params.id);
        if (!p) return res.status(404).json({ message: 'Project not found' });
        res.json(p);
    } catch (err) { next(err); }
});

// Update
router.put('/:id', auth, requireAdmin, async (req, res, next) => {
    try {
        const p = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(p);
    } catch (err) { next(err); }
});

// Delete
router.delete('/:id', auth, requireAdmin, async (req, res, next) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted' });
    } catch (err) { next(err); }
});

module.exports = router;
