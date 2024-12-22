const mongoose = require('mongoose');

const HoaDonSchema = new mongoose.Schema({
  HoaDonID: { type: Number, required: true, unique: true },
  GiaoDichID: { type: Number, required: true, ref: 'GiaoDich' },
  NgayLapHoaDon: { type: Date, required: true },
  SoTien: { type: Number, required: true }
});

module.exports = mongoose.model('HoaDon', HoaDonSchema);