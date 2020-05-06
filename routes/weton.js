const router = require('express').Router();
const wetonController = require('../controllers/weton');

router.get("/", (req, res) => {
  res.status(200).json({
    wetonAPI: "ready",
  })
})
router.post("/", wetonController.getWetonFromDate);

module.exports = router;