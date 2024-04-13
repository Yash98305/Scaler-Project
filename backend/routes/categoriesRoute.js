const express = require('express')
const router = express.Router()
const formidable = require("express-formidable");
const pages = require('../controllers/categoriesController.js')
// const upload = require("../utils/upload.js")
const {isAuthenticatedUser} = require("../middlewares/authMiddlewaresUser.js")

router.route('/create').post(isAuthenticatedUser,pages.createController)

module.exports = router