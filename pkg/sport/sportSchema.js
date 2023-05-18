const mongoose = require ('mongoose');

const sportSchema = new mongoose.Schema ({
    ime: {
        type: String,
    },
    igraci: {
        type: Number,
    },
    teren: {
        type: String,
    },
    vremetranje: {
        type: Number,
    },
});

const Sport = mongoose.model("Sport", sportSchema);
module.exports = Sport;