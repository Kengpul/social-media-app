const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true
    },
    // likes: Number,
    // comments: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'User'
    //     }
    // ]
})

module.exports = mongoose.model('Post', postSchema);