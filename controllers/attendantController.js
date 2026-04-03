const Attendant = require("../models/Attendant");

exports.createAttendant = async (req, res) => {
  try {
    const attendant = await Attendant.create(req.body);
    res.status(201).json(attendant);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAttendants = async (req, res) => {
  const attendants = await Attendant.find();
  res.json(attendants);
};

exports.getAttendant = async (req, res) => {
  const attendant = await Attendant.findById(req.params.id);
  if (!attendant) return res.status(404).json({ msg: "Not found" });
  res.json(attendant);
};

exports.updateAttendant = async (req, res) => {
  const attendant = await Attendant.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(attendant);
};

exports.deleteAttendant = async (req, res) => {
  await Attendant.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};