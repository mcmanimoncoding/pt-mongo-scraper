const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const newHeadline = new Schema({
    headline: {
        type: String,
        required: true,
        unique: true
    },
    summary: {
        type: String,
        required: true
    },
    date: String,
    saved: {
        type: Boolean,
        default: false
    }
})

const Headline = mongoose.model("Headline", newHeadline);
module.exports = Headline;