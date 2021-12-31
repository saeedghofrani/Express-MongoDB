"use strict";
const validateInput = (request) => {
    let responsePost = [];
    const { username, email, password, _gender } = request.body;
    if (username.length < 6) responsePost.push('username should be more than 6 characters');
    if (!(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/g).test(password)) responsePost.push('Please type at least 8 charcters, 1 capital, 1 lowerCase, 1 number');
    if (!(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g).test(email)) responsePost.push('invalid email');
    return responsePost;
};
module.exports = validateInput;
