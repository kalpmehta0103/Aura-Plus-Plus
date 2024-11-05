const mongoose = require('mongoose');

const SchedulerEventsSchema = new mongoose.Schema({
    starttime: {
        type: Date,
        required: true
    },
    endtime: {
        type: Date,
        required: true
    },
    subject: {
        type: String
    },
    location: {
        type: String
    },
    description: {
        type: String
    },
    isallday: {
        type: Boolean
    },
    starttimezone: {
        type: String
    },
    endtimezone: {
        type: String
    },
    recurrencerule: {
        type: String
    },
    recurrenceid: {
        type: Number
    },
    recurrenceexception: {
        type: String
    },
    followingid: { 
        type: Number 
    }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

// Export the model
module.exports = mongoose.model('SchedulerEvents', SchedulerEventsSchema);
