"use strict";
const getMaxMin = async (collection, arg, val) => {
    console.log(await collection.find().sort(arg).limit(val));
};
module.exports = getMaxMin;