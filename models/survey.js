const mongoose = require('mongoose');
const { Schema } = mongoose;

const SurveySchema = new Schema({
        id:{
             type: Date,
             default: Date.now 
        },
        responses: {
        questions: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        },
        type: Array,
        required: true
    },
});
module.exports = mongoose.model('survey', SurveySchema)