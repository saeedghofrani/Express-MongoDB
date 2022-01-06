const Users = require('../models/user');
const url = require('url');
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
                query: { "a": 1, "b": 2, data: JSON.stringify(user[0]._id) }
            }));
        }
        return response.render('login', { Error: 'username or password is incorrect' });
    } catch (error) {
        console.log('login request error: (Users.find)' + error);
    }
};
module.exports = { loginPage, loginRequest };