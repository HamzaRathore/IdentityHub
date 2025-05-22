const express = require("express");
const router = require("express").Router();
const {
  handleaddFeatureToTier,
  handleShowPrice,
  insertInitialPricingData,
} = require("../controller/pricing");

router.post("/post", handleaddFeatureToTier);
router.get("/get", handleShowPrice);
router.post("/postall", insertInitialPricingData);

module.exports = router;
