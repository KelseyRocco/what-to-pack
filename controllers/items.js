
const Item = require('../models/item');


async function create(req, res) {
    const item = await Item.create(req.body);
    res.status(201).json(item);
};

async function deleteOne(req, res) {
    const deletedItem = await Item.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedItem);
}

async function update(req, res) {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedItem);
}

async function getAllItems(req, res) {
    const allItems = Item.find({}, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            return res.json(result);
        }
    });
    
    res.status(200).json(allItem);
}

module.exports = {
    create,
    update,
    delete: deleteOne,
    getAllItems
};