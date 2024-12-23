const Admin = require('../models/Admin');

class HomeConTroller {
    home(req, res) {
        res.render('home');
    }

    login(req, res) {
        res.render('login');
    }

    handleLogin(req, res) {
        const { TenDangNhap, MatKhau } = req.body;

        Admin.findOne({ TenDangNhap, MatKhau }).then(admin => {
            if (admin) {
                res.render('dataAggregator', {layout: 'dataAggregator'});
            } else {
                res.status(401).send('Invalid credentials');
            }
        }).catch(error => {
            res.status(500).send('Internal server error');
        });
    }
}

module.exports = new HomeConTroller();