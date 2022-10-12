const mongoose=require("mongoose")

const movieSchema = new mongoose.Schema({
    name: {type: String, required: true},
    subject: {type: String, required: true},
    marks: {type: Number, required: true}
});

module.exports = mongoose.model("data", movieSchema);