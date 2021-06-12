const mongoose = require('mongoose')

const NoteSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    author:{
        type: String,
        //required: true
    },
    author_id:{
        type: String,
        //required: true
    },
    category:{
        type: String,
        required: true
    },
    category_id:{
        type: String,
    }
})

module.exports = mongoose.model('Note', NoteSchema);