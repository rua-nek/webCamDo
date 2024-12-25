const mongoose = require('mongoose');

const GiaoDichSchema = new mongoose.Schema({
  VatPhamID: { type: mongoose.Schema.Types.ObjectId, ref: 'VatPham'},
  NgayGiaoDich: { type: Date, required: true },
  LoaiGiaoDich: { type: String, required: true, enum: ['cầm đồ', 'chuộc lại'] },
  SoTien: { type: Number, required: true }
});

module.exports = mongoose.model('GiaoDich', GiaoDichSchema);