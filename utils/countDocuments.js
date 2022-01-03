"use strict";
const countDocuments = async (collection, query) => {
    console.log(await collection.countDocuments(query));
};
module.exports = countDocuments;