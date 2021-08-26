const mongoose = require('mongoose');
const ratingSchema = require('./ratingSchema');

const foodSchema = new mongoose.Schema({
    foodName: {
        type: String,
        required: true,
    },
    foodType: {
        type: String,
        required: true
    },
    foodCategory: [{
        type: String,
        required:true
    }],
    foodDescription: {
        type: String,
        required: true
    },
    foodImage: {
        type: String, 
        required: true
    },
    foodPrice: {
        type: Number,
        required: true
    },
    foodRating: [{
        type: ratingSchema
    }]
});

module.exports =  foodSchema;