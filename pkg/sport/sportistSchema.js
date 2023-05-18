const mongoose = require ('mongoose');

const sportistSchema = new mongoose.Schema ({
    ime: {
        type: String,
    },
    prezime: {
        type: String,
    },
    sport: {
        type: String,
    },
    godini: {
        type: Number,
    },
    sport: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Sport',
        }
    ]
});

const Sportist = mongoose.model("Sportist", sportistSchema);
module.exports = Sportist;