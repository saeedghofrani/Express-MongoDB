"use strict";
const password = () => {
    const randomstring = Math.random().toString(36).slice(-8);
    return randomstring;
}
module.exports = password;