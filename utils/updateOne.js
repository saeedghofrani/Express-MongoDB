"use strict";
const updateOne = async (collection, query, data) => {
    await collection.updateOne(query, data);
    console.log(await collection.find(query));
};
module.exports = updateOne;