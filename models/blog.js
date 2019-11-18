const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    post: {
        type: String,
        required: true,
    },
    published: {
        type: Date,
        default: function() {
            return Date.now()
        }
    },
}, {timestamps: true});

module.exports = mongoose.model('Blog', blogSchema);