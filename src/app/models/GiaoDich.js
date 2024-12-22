const mongoose = require('mongoose');

const GiaoDichSchema = new mongoose.Schema({
  GiaoDichID: { type: Number, required: true, unique: true },
  VatPhamID: { type: Number, required: true, ref: 'VatPham' },
  NgayGiaoDich: { type: Date, required: true },
  LoaiGiaoDich: { type: String, required: true, enum: ['cầm đồ', 'chuộc lại'] },
  SoTien: { type: Number, required: true }
});

module.exports = mongoose.model('GiaoDich', GiaoDichSchema);