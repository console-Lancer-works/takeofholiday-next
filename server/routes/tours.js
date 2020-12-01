const express = require("express");
const router = express.Router();
const checkAuth = require("../Middlewares/requirelogin");

const {AddTours,DeleteTours,EditTours,getByIdTour,getTours}=require('../Controllers/tours')

router.get("/alltours",getTours);
router.get("/:id",getByIdTour);

router.post("/", checkAuth, AddTours);
router.put("/:id",checkAuth, EditTours);
router.delete("/:id",checkAuth, DeleteTours);

module.exports = router;
