const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Add routes here

module.exports = router;


// creat task 
router.post('/', async (req, res) => {
    try {
        const newTask = new Task({
            description: req.body.description
        });
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});



// read tasks

// GET: Retrieve all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// PATCH: Update a task's status
router.patch('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        task.isCompleted = !task.isCompleted;
        const updatedTask = await task.save();
        res.json(updatedTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// DELETE: Delete a task
router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});