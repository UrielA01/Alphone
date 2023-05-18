#! /usr/bin/env node

console.log(
    'This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Contact = require("./models/contact");

const contacts = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false); // Prepare for Mongoose 7

const mongoDB = userArgs[
    0
];

main().catch((err) => console.log(err));

async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await createContacts();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
}

async function contactCreate(teamName, system, numbers) {
    contactDetail = { teamName: teamName, system: system, numbers: numbers };

    const contact = new Contact(contactDetail);

    await contact.save();
    contacts.push(contact);
    console.log(`Added contact: ${teamName}`);
}

async function createContacts() {
    console.log("Adding contacts");
    await Promise.all([
        contactCreate("tasht",  "tomcloud",  ["0545652222", "0000000000"]),
        contactCreate("asdafdsf",  "nasdvkj",  ["099890000", "73284908", "8987899"]),
        contactCreate("asasfgdg",  "nsda",  ["0987230594", "23432412", "3242342"]),
    ]);
}
