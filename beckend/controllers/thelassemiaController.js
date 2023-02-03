const thelassemiaModel = require("../models/thalassemiaModel.js");
const createThelassemia = async (req, res) => {
  console.log(req.body);
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

  const info = {
    patientName,
    bloodGroup,
    zila,
    thana,
    village,
    gurdianName,
    gurdianMobileNumber,
    contactName,
    mobileNumber,
  };
  const thelassemiaInfo = new thelassemiaModel(info);
  try {
    await thelassemiaInfo.save();
    res.status(200).json({
      msg: "Data is successfully added",
    });
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

module.exports = createThelassemia;
