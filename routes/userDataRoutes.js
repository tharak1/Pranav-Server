const express = require("express");
const { getUserData, createUserData, updateUserData, initCreate, deleteUserdata } = require("../controllers/userDataController");
const validateToken = require("../middleware/validateToken");
const router = express.Router();

router.route('/').put(validateToken,initCreate);
router.route('/').get(validateToken,getUserData);
router.route('/').delete(deleteUserdata);
router.route('/update').post(validateToken,updateUserData)


module.exports = router;