const wetonan = require('../helpers/weton');
const datenum = require('../helpers/datenum');

class WetonController {
  static getWetonFromDate(req, res, next) {
    const { year, month, date } = req.body;
    const weton = wetonan(datenum(Number(year), Number(month), Number(date)))
    res.status(200).json({
      message: "getwetonfromdate",
      weton
    })
  }
}

module.exports = WetonController;