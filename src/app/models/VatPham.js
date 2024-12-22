const mongoose = require('mongoose');

const VatPhamSchema = new mongoose.Schema({
  VatPhamID: { type: Number, required: true, unique: true },
  TenVatPham: { type: String, required: true },
  MoTa: { type: String, required: true },
  GiaTri: { type: Number, required: true },
  NgayCam: { type: Date, required: true },
  KhachHangID: { type: Number, required: true, ref: 'KhachHang' }
});

module.exports = mongoose.model('VatPham', VatPhamSchema);