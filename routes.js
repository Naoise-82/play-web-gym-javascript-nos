"use strict";

const express = require("express");
const router = express.Router();

const memberdashboard = require("./controllers/memberdashboard.js");
const trainerdashboard = require("./controllers/trainerdashboard.js");
const trainercommentpage = require("./controllers/trainercommentpage");
const updatedetails = require("./controllers/updatedetails");
const accounts = require("./controllers/accounts.js");
const about = require("./controllers/about");

const analytics = require("./utils/analytics");

router.get("/", accounts.index);
router.get("/login", accounts.login);
router.get("/trainer-login", accounts.trainerLogin);
router.get("/signup", accounts.signup);
router.get("/logout", accounts.logout);
router.get("/about", about.index);
router.post("/register", accounts.register);
router.post("/authenticate", accounts.authenticate);
router.post("/trainerauthenticate", accounts.trainerAuthenticate);

router.get("/updatedetails", updatedetails.index);
router.post("/updatemember/:id", updatedetails.updateMember);

router.get("/memberdashboard", memberdashboard.index);
router.post("/memberdashboard/addassessment", memberdashboard.addAssessment);
router.get("/memberdashboard/removeassessment/:id", memberdashboard.removeAssessment);
router.post("/memberdashboard/addgoal", memberdashboard.addGoal);

router.get("/trainerdashboard", trainerdashboard.index);
router.get("/trainerdashboard/deletemember/:id", trainerdashboard.deleteMember);
router.get("/trainercommentpage/:id", trainercommentpage.index);
router.post("/trainercommentpage/addcomment/:id", trainercommentpage.addComment);
router.post("/trainercommentpage/traineraddgoal/:id", trainercommentpage.trainerAddGoal);

module.exports = router;