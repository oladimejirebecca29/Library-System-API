const express = require("express");
const router = express.Router();
const controller = require("../controllers/attendantController");

router.post("/", controller.createAttendant);
router.get("/", controller.getAttendants);
router.get("/:id", controller.getAttendant);
router.put("/:id", controller.updateAttendant);
router.delete("/:id", controller.deleteAttendant);

module.exports = router;