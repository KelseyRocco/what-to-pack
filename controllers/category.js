
const Category = require('../models/category')

module.exports = {
    index,
    show,
    create,
    delete: deleteOne,
    update
};

function update(req, res) {
    Category.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(category) {
        res.status(200).json(category);
    }).catch(function(err) {
        res.status(400).json(err);
    });
}

function deleteOne(req, res) {
    Category.findByIdAndDelete(req.params.id).then(function(category) {
        res.status(200).json(category);
    }).catch(function(err) {
        res.status(400).json(err);
    });
}

function show(req, res) {
    Category.findById(req.params.id).then(function(category) {
        res.status(200).json(category);
    }).catch(function(err) {
        res.status(400).json(err);
    });
}

function create(req, res) {
    Category.create(req.body).then(function(category) {
        res.status(201).json(category);
    }).catch(function(err) {
        res.status(400).json(err);
    });
}

function index(req, res) {
    Category.find({}).then(function(categories) {
        res.status(200).json(categories);
    }).catch(function(err) {
        res.status(400).json(err);
    });
}


//does not do anything as of right now, started working on it too late