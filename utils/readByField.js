"use strict";
const readByField = async (collection, filter = {}, query = {}) => {
    console.log(await collection.find(filter, query));
};
module.exports = readByField;