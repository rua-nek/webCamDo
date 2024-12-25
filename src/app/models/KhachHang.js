const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KhachHangSchema = new Schema({
    HoTen: { type: String, required: true },
    DiaChi: { type: String, required: true },
    SoDienThoai: { type: String, required: true },
    CMND: { type: String, required: true }
});

module.exports = mongoose.model('KhachHang', KhachHangSchema);