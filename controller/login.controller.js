const Users = require('../models/user');
const url = require('url');
const { v4: uuidv4 } = require('uuid');
const loginPage = (_request, response) => {
    response.render('login', { Error: 'use your username and password to access your dashbord' });
};
const loginRequest = async (request, response) => {
    const { username, password } = request.body;
    try {
        const user = await Users.find({ username: username, password: password });
        if (user.length > 0) {
            return response.redirect(url.format({
                pathname: "/dashboard",
                query: { "a": uuidv4(), data: JSON.stringify(user[0]._id), "b": uuidv4() }
            }));
        }
        return response.render('login', { Error: 'username or password is incorrect' });
    } catch (error) {
        console.log('login request error: (Users.find)' + error);
    }
};
module.exports = { loginPage, loginRequest };