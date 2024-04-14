const express = require('express')
const router = express.Router()
const formidable = require("express-formidable");
const pages = require('../controllers/incomeController.js')
const {isAuthenticatedUser} = require("../middlewares/authMiddlewaresUser.js")

router.route('/create').post(pages.createController)

module.exports = router