var express = require('express');
var router = express.Router();

const contactController = require("../controllers/contactController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contacts', contactController.contact_get);

router.post('/contact', contactController.add_contact_post);

router.delete('/contact', contactController.delete_contact);

module.exports = router;
