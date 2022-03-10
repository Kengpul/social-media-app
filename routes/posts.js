const express = require('express');
const router = express.Router();
const post = require('../controllers/posts');

router.route('/')
    .get(post.index)
    .post(post.createPost)

router.get('/create', post.renderCreateForm)

router.route('/:id')
    .get(post.showPost)
    .put(post.editPost)
    .delete(post.deletePost)

router.get('/:id/edit', post.renderEditForm)

module.exports = router;
