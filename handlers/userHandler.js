const User = require ('../pkg/sport/userSchema');

exports.getAll = async (req, res) => {
    try {
        const useri = await User.find();
        res.status(200).json({
            status: "success",
            data: {
                useri,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: 'Fail',
            message: err,
        });
    }
};

exports.getOne = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                user,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: 'Fail',
            message: err,
        });
    }
};

exports.create = async (req, res) => {
    try {
        const novUser = await User.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                novUser,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: 'Fail',
            message: err,
        });
    }
};

exports.delete = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success',
            data: null,
        });
    } catch (err) {
        res.status(404).json({
            status: 'Fail',
            message: err,
        });
    }
};

exports.update = async (req, res) => {
    try {
        const user = await User.findByIdAndUdpate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            status: 'success',
            data: {
                user,
            },
        });

    } catch (err) {
        res.status(404).json({
            status: 'Fail',
            message: err,
        });
    }
};