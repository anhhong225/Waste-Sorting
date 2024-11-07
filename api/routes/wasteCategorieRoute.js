const express = require("express");
const router = require("router");
const wasteCategoryController = require("../controllers/wasteCategoryController");

router.get("/", wasteCategoryController.getWasteCategories)
router.get("/:categoryId", wasteCategoryController.getWasteCategory)

module.exports = router;