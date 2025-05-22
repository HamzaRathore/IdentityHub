const express = require("express");
const router = require("express").Router();

const { handleReview, handleShowReview } = require("../controller/review");

router.post("/post", handleReview);
router.get("/get", handleShowReview);

module.exports = router;
