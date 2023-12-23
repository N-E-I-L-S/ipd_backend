const mongoose = require('mongoose');
const { Schema } = mongoose;

const UrlSchema = new Schema({
        id:{
            type : String,
            required: false,
        },
        username: {
            type: String,
            required: true
        },
        formattedurl:{
            type: Array,
            required:true
        }
        
});
module.exports = mongoose.model('urls', UrlSchema)