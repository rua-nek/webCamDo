const mongoose = require('mongoose');

const KhachHangSchema = new mongoose.Schema({
  KhachHangID: { type: Number, required: true, unique: true },
  HoTen: { type: String, required: true },
  DiaChi: { type: String, required: true },
  SoDienThoai: { type: String, required: true },
  CMND: { type: String, required: true }
});

module.exports = mongoose.model('KhachHang', KhachHangSchema);