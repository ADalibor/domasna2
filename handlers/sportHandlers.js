const Sport = require ('../pkg/sport/sportSchema');

exports.getAll = async (req, res) => {
    try {
        const sportovi = await Sport.find();
        res.status(200).json({
            status: "success",
            data: {
                sportovi,
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
        const sport = await Sport.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                sport,
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
        const novSport = await Sport.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                novSport,
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
        await Sport.findByIdAndDelete(req.params.id);
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
        const sport = await Sport.findByIdAndUdpate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            status: 'success',
            data: {
                sport,
            },
        });

    } catch (err) {
        res.status(404).json({
            status: 'Fail',
            message: err,
        });
    }
};