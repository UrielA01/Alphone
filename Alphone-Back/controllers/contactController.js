const asyncHandler = require('express-async-handler');
const Contact = require("../models/contact.js");
const { body, validationResult } = require("express-validator");

exports.contact_get = asyncHandler(async (req, res, next) => {
    const allContacts = await Contact.find().sort({ teamName: 1 }).exec();
    res.send(allContacts);
});


exports.add_contact_post = [
    body("teamName")
        .trim()
        .isLength({ min: 3 })
        .escape()
        .withMessage("Team name too short")
        .isAlphanumeric()
        .withMessage("Team name has non-alphanumeric characters."),
    body("system")
        .trim()
        .isLength({ min: 3 })
        .escape()
        .withMessage("System name too short")
        .isAlphanumeric()
        .withMessage("System name has non-alphanumeric characters."),
    // body("numbers")
    //     .isLength({ min: 3 })
    //     .escape()
    //     .withMessage("Numbers list can not be empty"),

    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);

        const contact = new Contact({
            teamName: req.body.teamName,
            system: req.body.system,
            numbers: req.body.numbers,
        });

        if (!errors.isEmpty()) {
            res.send("Error: " + errors.errors[0].msg)
            return;
        } else {
            await contact.save();
            res.send("Success");
        }
    }),
];
