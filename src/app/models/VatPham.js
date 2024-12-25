const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VatPhamSchema = new Schema({
    TenVatPham: { type: String, required: true },
    HinhAnh: { type: String },
    MoTa: { type: String },
    GiaTri: { type: Number, required: true },
    KhachHangID: { type: Schema.Types.ObjectId, ref: 'KhachHang' }
});

module.exports = mongoose.model('VatPham', VatPhamSchema);