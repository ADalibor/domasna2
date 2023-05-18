const Sportist = require ('../pkg/sport/sportistSchema');

exports.getAll = async (req, res) => {
    try {
        const sportisti = await Sportist.find();
        res.status(200).json({
            status: "success",
            data: {
                sportisti,
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
        const sportist = await Sportist.findById(req.params.id).populate('sport');
        res.status(200).json({
            status: 'success',
            data: {
                sportist,
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
        const novSportist = await Sportist.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                novSportist,
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
        await Sportist.findByIdAndDelete(req.params.id);
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
        const sportist = await Sportist.findByIdAndUdpate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            status: 'success',
            data: {
                sportist,
            },
        });

    } catch (err) {
        res.status(404).json({
            status: 'Fail',
            message: err,
        });
    }
};