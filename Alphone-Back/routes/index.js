var express = require('express');
var router = express.Router();

const contactController = require("../controllers/contactController");

router.get('/contacts', contactController.contact_get);

router.post('/contact', contactController.add_contact_post);

router.delete('/contact', contactController.delete_contact);

router.put('/contact', contactController.update_contact);

module.exports = router;
