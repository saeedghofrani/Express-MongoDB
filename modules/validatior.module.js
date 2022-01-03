const validator = require('validator');
const usernameValidator = (request) => {
    const { username } = request.body;
    if (!username || validator.isEmpty(username) || username.length < 2) {
        return "username should be Atleast 2 character";
    }
    return '';
};
const passwordValidator = (request) => {
    const { password } = request.body;
    if (!password || validator.isEmpty(password) || password.length < 8 || !validator.matches(password, "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_])")) {
        return 'password should be Atleast 8 character, letter, number, special character ';
    }
    return '';
};
const firstnamedValidator = (request) => {
    const { firstName } = request.body;
    if (!firstName || validator.isEmpty(firstName) || firstName.length < 2 || firstName.length > 30) {
        return 'firstname should be Atleast 2 character and max 30 character';
    }
    return '';
};
const lastnameValidator = (request) => {
    const { lastName } = request.body;
    if (!lastName || validator.isEmpty(lastName) || lastName.length < 2 || lastName.length > 30) {
        return 'lastname should be Atleast 2 character and max 30 character';
    }
    return '';
};
module.exports = { usernameValidator, passwordValidator, firstnamedValidator, lastnameValidator };