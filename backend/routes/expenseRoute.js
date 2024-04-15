const express = require('express')
const router = express.Router()
const pages = require('../controllers/expenseController.js')
const {isAuthenticatedUser} = require("../middlewares/authMiddlewaresUser.js")

router.route('/create').post(isAuthenticatedUser,pages.createController)
router.route('/get').get(isAuthenticatedUser,pages.getController)

module.exports = router