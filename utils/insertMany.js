"use strict";
const insertMany = async (collection, data) => {
    await collection.insertMany(data);
};
module.exports = insertMany;