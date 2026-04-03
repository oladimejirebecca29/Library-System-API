const express = require("express");
const router = express.Router();
const controller = require("../controllers/studentController");

router.post("/", controller.createStudent);
router.get("/", controller.getStudents);
router.get("/:id", controller.getStudent);
router.put("/:id", controller.updateStudent);
router.delete("/:id", controller.deleteStudent);

module.exports = router;