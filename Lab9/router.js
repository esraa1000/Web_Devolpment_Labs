const express = require('express');
const Course = require('./models/courseSchema');
const router = express.Router();
 
// List of courses (Read)
router.get('/', async (req, res) => {
    try {
        const courses = await Course.find({});
        res.json(courses);
    } catch (err) {
        res.status(500).send("Error retrieving courses");
    }
});
 
// Create a new course
router.post('/new', async (req, res) => {
    try {
        const { title, description, instructionName, price, category } = req.body;
        const course = new Course({
            title,
            description,
            instructionName,
            price,
            category
        });
        const result = await course.save();
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

//update course
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  const updatedCourse = await Course.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
  res.json(updatedCourse);
});

//delete course
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedCourse = await Course.findByIdAndDelete(id);
});

module.exports = router;
