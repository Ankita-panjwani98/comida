const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    _id: false,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userSchema',
        required: true
    }, //Ref of User ID
    rating: {
        type: Number,
        required: true
    },
    ratingReview: {
        type: String,
        required:false,
    },
    ratingDateTime: {
        type: Date,
        required: true,
        default: Date.now()
    }
});
module.exports = ratingSchema;