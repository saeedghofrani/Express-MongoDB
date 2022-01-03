const User = require('../models/user');
const ObjectId = require('mongodb').ObjectId;
const dashboard = async (request, response) => {
    let x = JSON.parse(request.query.data);
    const id = ObjectId(x);
    const user = await User.findOne({ _id: id });
    response.render('dashboard', { data: user });
};
const dashboardChange = (request, response) => {
    const { username, password, firstName, lastName, gender } = response.body;

};
module.exports = { dashboard, dashboardChange };