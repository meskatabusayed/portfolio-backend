// controllers/experienceController.js
const Experience = require('../models/Experience');

// Get all experiences
exports.getExperiences = async (req, res) => {
  const experiences = await Experience.find();
  res.json(experiences);
};

// Create new experience
exports.createExperience = async (req, res) => {
  const experience = new Experience(req.body);
  await experience.save();
  res.status(201).json(experience);
};
