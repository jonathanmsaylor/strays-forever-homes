var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
    breedname: { type: String, required: true, minlength: 3 },
    age: { type: Number, required: true, minlength: 2 },
    gender: { type: String, required: true},
    comfortablecatdog: { type: String},
    comfortablekids: { type: String},
    health: { type: String, required: true},

}, { timestamps: true });

mongoose.model('Question', QuestionSchema);

    // review: {RestaurantSchema},
