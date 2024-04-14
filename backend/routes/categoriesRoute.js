const express = require('express')
const router = express.Router()
const formidable = require("express-formidable");
const pages = require('../controllers/categoriesController.js')
// const upload = require("../utils/upload.js")
const {isAuthenticatedUser} = require("../middlewares/authMiddlewaresUser.js")

router.route('/create').post(isAuthenticatedUser,pages.createController)
router.route('/getcategory').get(isAuthenticatedUser,pages.getCategory)
router.route('/getincomecategory').get(isAuthenticatedUser,pages.getIncomeCategory)
router.route('/getexpensecategory').get(isAuthenticatedUser,pages.getExpenseCategory)
router.route('/updatecreate/:id').put(isAuthenticatedUser,pages.updateCategory)
router.route('/deletecreate/:id').delete(isAuthenticatedUser,pages.deleteCategory)
module.exports = router