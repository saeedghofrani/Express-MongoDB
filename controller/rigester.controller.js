const { usernameValidator, passwordValidator, firstnamedValidator, lastnameValidator } = require('../modules/validatior.module.js');
const Users = require('../models/user');
const rigesterPage = (_request, response) => {
    response.render('rigester', { Error: '' });
};
const rigesterRequest = async (request, response) => {
    const { username, password, firstname, lastname, gender } = request.body;
    if (usernameValidator(request) || passwordValidator(request) || firstnamedValidator(request) || lastnameValidator(request)) {
        const message = `${usernameValidator(request)}, ${passwordValidator(request)}, ${firstnamedValidator(request)}, ${lastnameValidator(request)}`;
        return response.render('rigester', { Error: message });
    }
    let duplicateUser = await Users.find({ "username": username });
    if (duplicateUser.length > 0) {
        console.log('find duplic');
        return response.render('rigester', { Error: 'please try again with diffrent input' });
    }
    let data = { username, password, firstname, lastname, gender };
    Users.create(data, function (err, user) {
        if (err) return response.status(500).render('rigester', { Error: "Somthing went wrong in add user \n!" + err });
        console.log(user);
        response.redirect('/login');
    });
};
module.exports = { rigesterPage, rigesterRequest };