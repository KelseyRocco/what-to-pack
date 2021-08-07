const express = require('express');
const router = express.Router()
const Item = require("../../models/item");
const itemsCtrl = require("../../controllers/items.js")


router.item('/create', itemsCtrl.create)
router.put('/update', itemsCtrl.update)
router.delete('/del', itemsCtrl.delete)
router.get('/all', itemsCtrl.getAllItems)



module.exports = router;