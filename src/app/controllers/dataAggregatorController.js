class dataAggregatorController {
    index(req, res) {
        res.render('dataAggregator');
    }
}

module.exports = new dataAggregatorController();