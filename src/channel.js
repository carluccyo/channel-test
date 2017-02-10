var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })
  // define the home page route
router.get('/', function(req, res) {
    res.send('Channel home page')
  })
  // define the about route
router.get('/about', function(req, res) {
  res.send('About channel')
})


router.post('/init', function(req, res) {
    //init users


    var _users = req.body.users;

    console.log(req.body);
    res.send(req.body);

});



router.post('/', function(req, res) {

    // get message from brodcast
    console.log(req.body);
    res.send(req.body);

});

module.exports = router
