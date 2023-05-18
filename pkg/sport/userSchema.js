const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema ({
    email: {
        type: String,
        required: [true, 'Mora da vnesete email'],
    },
    password: {
        type: String,
        required: [true, 'Mora da vnesete password'],
        minlenght: [8, 'Lozinkata mora da bide najmalku 8 karakteri'],
    },
});

const User = mongoose.model('User', userSchema);
module.exports = User;