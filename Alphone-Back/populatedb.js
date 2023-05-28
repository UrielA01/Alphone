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
        contactCreate("Infrastructure",  "TomCloud",  ["4454", "2348"]),
        contactCreate("Development",  "Cloud portal",  ["2341", "4322", "9823"]),
        contactCreate("OpenShift", "OpenShift", ["0987", "5672", "2783"]),
        contactCreate("PaaS", "TomCloud", ["9824", "1248", "3746"]),
    ]);
}
