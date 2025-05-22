const express = require("express");
const router = require("express").Router();

const { handleService, handleShowService } = require("../controller/service");

router.post("/post", handleService);
router.get("/get", handleShowService);

module.exports = router;
