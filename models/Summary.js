const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const newSummary = new Schema({
    _headlineId: {
        type: Schema.Types.ObjectId,
        ref: "Headline"
    },
    summary: String,
    date: String
})

const Headline = mongoose.model("Headline", newHeadline);
module.exports = Headline;