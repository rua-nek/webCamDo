class dataAggregatorController {
    index(req, res) {
        res.render('dataAggregator');
    }
    home(req, res) {
        res.render('home');
    }
}

module.exports = new dataAggregatorController();