
const express = require("express");
const { getRecipies, createRecipe, getRecipie } = require("../controllers/recipeControllers");


const router = express.Router();

router.route("/").get(getRecipies);
router.route("/").post(createRecipe);
router.route("/:id").get(getRecipie);

module.exports = router;