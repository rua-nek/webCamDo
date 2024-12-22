const mongoose = require('mongoose');
const AdminSchema = new mongoose.Schema({
  AdminID: { type: Number, required: true, unique: true },
  TenDangNhap: { type: String, required: true },
  MatKhau: { type: String, required: true }
});
module.exports = mongoose.model('Admin', AdminSchema);