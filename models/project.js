const mongoose = require("mongoose");

const project = new mongoose.Schema({
	title: {
		type: String,
		required: true,
    },
    image: {
        type: String,
        required: true
    },
    tools: {
        type: [String],
        required: true
    },
    source: {
        type: String,
        required: true
    },
    live: {
        type: String,
        required: true
    },
    intro: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Project", project);
