/* eslint-disable no-undef */
const mongoose = require('mongoose')



const entriesSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        content: {type: String, required: true},
        author: {type: String, required: true},
        date: {type: Date, required: true, default: Date.now},
    },
    {timestamps: true}
);

const Entry = mongoose.model('Entry', entriesSchema);

module.exports = Entry;