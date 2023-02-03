const thelassemiaMiddleware = async (req, res, next) => {
  const {
    patientName,
    bloodGroup,
    zila,
    thana,
    village,
    gurdianName,
    gurdianMobileNumber,
    contactName,
    mobileNumber,
  } = req.body;

  try {
    if (!patientName) {
      res.status(400).json({
        msg: "Patient name is missing!",
      });
    }
    if (!bloodGroup) {
      res.status(400).json({
        msg: "Blood group is missing",
      });
    }
    if (!zila) {
      res.status(400).json({
        msg: "Zila is missing",
      });
    }
    if (!mobileNumber) {
      res.status(400).json({
        msg: "Mobile Number is missing",
      });
    }
    if (!contactName) {
      res.status(400).json({
        msg: "Contact Name is missing",
      });
    }
    if (!gurdianMobileNumber) {
      res.status(400).json({
        msg: "Gurdian Number is missing",
      });
    }
    if (!village) {
      res.status(400).json({
        msg: "Village is missing",
      });
    }
    if (!gurdianName) {
      res.status(400).json({
        msg: "Gurdian Name is missing",
      });
    }
    if (!thana) {
      res.status(400).json({
        msg: "Thana is missing",
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      msg: "Server error ",
    });
  }
};

module.exports = thelassemiaMiddleware;
