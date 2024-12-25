const Admin = require('../models/Admin');
const KhachHang = require('../models/KhachHang');
const VatPham = require('../models/VatPham');
const GiaoDich = require('../models/GiaoDich');

class HomeConTroller {
    home(req, res) {
        res.render('home', { layout: 'main' });
    }

    login(req, res) {
        res.render('login', { layout: 'main' });
    }

    handleLogin(req, res) {
        const { TenDangNhap, MatKhau } = req.body;

        Admin.findOne({ TenDangNhap, MatKhau }).then(admin => {
            if (admin) {
                res.render('dataAggregator', { layout: 'dataAggregator' });
            } else {
                res.status(401).send('Invalid credentials');
            }
        }).catch(error => {
            res.status(500).send('Internal server error');
        });
    }

    addData(req, res) {
        res.render('addData', { layout: 'main' });
    }

    async handleAddData(req, res) {
        const { HoTen, DiaChi, SoDienThoai, CMND, TenVatPham, MoTa, GiaTri } = req.body;
        const HinhAnh = req.file ? req.file.filename : null;

        try {
            // Tạo mới khách hàng
            const newKhachHang = new KhachHang({
                HoTen: HoTen,
                DiaChi: DiaChi,
                SoDienThoai: SoDienThoai,
                CMND: CMND
            });
            await newKhachHang.save();

            // Tạo mới vật phẩm liên quan đến khách hàng
            const newVatPham = new VatPham({
                TenVatPham : TenVatPham,
                HinhAnh : HinhAnh,
                MoTa : MoTa,
                GiaTri : GiaTri,
                KhachHangID: newKhachHang._id // Liên kết với khách hàng
            });
            await newVatPham.save();

            // Tạo mới giao dịch liên quan đến vật phẩm
            const newGiaoDich = new GiaoDich({
                VatPhamID: newVatPham._id,
                NgayGiaoDich: new Date(),
                LoaiGiaoDich: 'cầm đồ',
                SoTien: GiaTri
            });
            await newGiaoDich.save();

            res.send('Data added successfully');
        } catch (error) {
            console.error('Error adding data:', error); // Ghi log lỗi chi tiết
            res.status(500).send('Error adding data: ' + error.message);
        }
    }
}

module.exports = new HomeConTroller();