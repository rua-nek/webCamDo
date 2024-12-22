class TestController {
    index(req, res) {
        res.send('This is a test page.');
    }
}
module.exports = new TestController();