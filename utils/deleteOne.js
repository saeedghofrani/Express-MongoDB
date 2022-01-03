"use strict";
const deleteOne = async (collection, query) => {
    console.log(await collection.deleteOne(query));
};
module.exports = deleteOne;