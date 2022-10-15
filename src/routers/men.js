const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens");
// we will handle post request
router.post("/mens", async (req, res) => {
  try {
    const addingRecord = new MensRanking(req.body);
    //  console.log(req.body)
    const createRecord = await addingRecord.save();
    res.status(201).send(createRecord);
  } catch (e) {
    res.status(400).send(e);
  }
});
// read the data of registration students
router.get("/mens", async (req, res) => {
  try {
    // ranking : 1 krne se yh accending ordr m set ho chuka hoga
    const readData = await MensRanking.find().sort({ ranking: 1 });
    res.send(readData);
  } catch (err) {
    res.status(400).send(err);
  }
});
// get indivisual student data using id
router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const readindData = await MensRanking.findById({ _id });
    res.send(readindData);
  } catch (err) {
    res.status(400).send(err);
  }
});
//   update data
router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const readindData = await MensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
      // new : true se puraana jo update se phle likha tha vh ni dikhega
    });
    res.send(readindData);
  } catch (err) {
    res.status(500).send(err);
  }
});
//   delete data
router.delete("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const readindData = await MensRanking.findByIdAndDelete(_id);
    res.send(readindData);
  } catch (err) {
    res.status(500).send(err);
  }
});
module.exports = router;
