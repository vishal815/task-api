const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    taskName: {
        type: String,
        required: [true, 'task must have a name'],
        trim: true,
        min: [5, 'task must be of min 5 characters']
    },
    taskDescription: {
        type: String,
        required: [true, 'task must have a description'],
        trim: true
    }
});

module.exports = mongoose.model('Task', taskSchema);