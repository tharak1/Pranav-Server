const express = require("express")
const router = express.Router()
const validateToken = require("../middleware/validateToken");
const { getUserInfo, deleteUserInfo, initCreateInfo, updateUserInfo } = require("../controllers/userInfoController");

router.route('/').get(validateToken,getUserInfo);
router.route('/').delete(deleteUserInfo);
router.route('/').post(validateToken,initCreateInfo);
router.route('/update').post(validateToken,updateUserInfo);

module.exports = router;