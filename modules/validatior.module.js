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
    const { firstname } = request.body;
    if (!firstname || validator.isEmpty(firstname) || firstname.length < 2 || firstname.length > 30) {
        return 'firstname should be Atleast 2 character and max 30 character';
    }
    return '';
};
const lastnameValidator = (request) => {
    const { lastname } = request.body;
    if (!lastname || validator.isEmpty(lastname) || lastname.length < 2 || lastname.length > 30) {
        return 'lastname should be Atleast 2 character and max 30 character';
    }
    return '';
};
module.exports = { usernameValidator, passwordValidator, firstnamedValidator, lastnameValidator };