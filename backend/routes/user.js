const express = require("express");
const router = require("express").Router();

const { handleUser, handleshowUser } = require("../controller/user");

router.post("/post", handleUser);
router.get("/get", handleshowUser);

module.exports = router;
