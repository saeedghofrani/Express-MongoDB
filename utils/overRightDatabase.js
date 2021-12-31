"use strict";
const { join } = require("path");
const { writeFile } = require("fs")
const overRightDatabase = (database) => {
    writeFile(join(__dirname, '../db/userData.db.json'), JSON.stringify(database), (err) => {
        if (err) return console.log(`Error (write users json): ${err.message}`);
    });
};
module.exports = overRightDatabase;