const Post = require('../models/posts');

module.exports.index = async (req, res) => {
    const posts = await Post.find({});
    res.render('home', { posts })
}

module.exports.renderCreateForm = (req, res) => {
    res.render('posts/create');
}

module.exports.createPost = async (req, res) => {
    const post = new Post(req.body.post);
    await post.save();
    res.redirect(`/post/${post._id}`);
}

module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id)
    res.render('posts/edit', { post });
}

module.exports.showPost = async (req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.render('posts/show', { post });
}

module.exports.editPost = async (req, res) => {
    const { id } = req.params
    const post = await Post.findByIdAndUpdate(id, req.body.post, { new: true });
    await post.save()
    res.redirect(`/post/${id}`);
}

module.exports.deletePost = async (req, res) => {
    const { id } = req.params;
    await Post.findByIdAndDelete(id);
    res.redirect('/post');
}