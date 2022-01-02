const { usernameValidator, passwordValidator, firstnamedValidator, lastnameValidator } = require('../modules/validatior.module.js');
const rigesterPage = (request, response) => {
    response.render('rigester', { Error: '' });
};
const rigesterRequest = (request, response) => {
    const message = `${usernameValidator(request)}, ${passwordValidator(request)}, ${firstnamedValidator(request)}, ${lastnameValidator(request)}`;
    response.render('rigester', { Error: message });
};
module.exports = { rigesterPage, rigesterRequest };