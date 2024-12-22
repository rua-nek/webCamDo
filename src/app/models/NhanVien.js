const mongoose = require('mongoose');

const NhanVienSchema = new mongoose.Schema({
  NhanVienID: { type: Number, required: true, unique: true },
  HoTen: { type: String, required: true },
  ChucVu: { type: String, required: true },
  SoDienThoai: { type: String, required: true }
});

module.exports = mongoose.model('NhanVien', NhanVienSchema);