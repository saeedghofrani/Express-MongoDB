const loginPage = (request, response) => {
    response.render('login', { Error: 'use your username and password to access your dashbord' });
};
const loginRequest = (request, response) => {

};
module.exports = { loginPage, loginRequest };