const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: String,
    story: String,
    creater: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostMessage', postSchema, "mycollection");

module.exports = PostMessage;