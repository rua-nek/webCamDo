const mongoose = require('mongoose');

const HoaDonSchema = new mongoose.Schema({
  GiaoDichID: { type: Number, required: true, ref: 'GiaoDich' },
  NgayLapHoaDon: { type: Date, required: true },
  SoTien: { type: Number, required: true }
});

module.exports = mongoose.model('HoaDon', HoaDonSchema);