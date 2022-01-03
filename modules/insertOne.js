"use strict";
const insertOne = async (collection, data) => {
    await collection.create(data);
};
module.exports = insertOne;