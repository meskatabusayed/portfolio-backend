// routes/blogRoutes.js
const express = require('express');
const { getBlogs, createBlog, getBlogById, updateBlog, deleteBlog } = require('../controllers/blogController');

const router = express.Router();

router.get('/', getBlogs);
router.post('/', createBlog);
router.get('/:id', getBlogById);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);

module.exports = router;