"use strict";
const emailGenerator = (gmail, option) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let string = '';
    for (let i = 0; i < 10; i++) { string += chars[Math.floor(Math.random() * chars.length)]; }
    return string + option + gmail;
}
module.exports = emailGenerator;