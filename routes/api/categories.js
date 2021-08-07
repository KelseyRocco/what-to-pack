const express = require('express');
const router = express.Router()
const Item = require("../../models/item");
const itemsCtrl = require("../../controllers/items.js")


router.category('/create', categoriesCtrl.create)
router.put('/update', categoriesCtrl.update)
router.delete('/del', categoiesCtrl.delete)
router.get('/all', categoriesCtrl.getAllItems)



module.exports = router;