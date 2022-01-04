const User = require('../models/user');
const { passwordValidator, firstnamedValidator, lastnameValidator } = require('../modules/validatior.module.js');
const ObjectId = require('mongodb').ObjectId;
var mongoose = require('mongoose');
const dashboard = async (request, response) => {
    let queryID = JSON.parse(request.query.data);
    const id = ObjectId(queryID);
    const user = await User.findOne({ _id: id });
    response.render('dashboard', { data: user });
};
const dashboardChange = async (request, response) => {
    let { id, username, password, firstName, lastName, gender } = request.body;
    let newid = mongoose.Types.ObjectId(id.trim());
    if (passwordValidator(request) || firstnamedValidator(request) || lastnameValidator(request)) {
        const message = `${passwordValidator(request)}, ${firstnamedValidator(request)}, ${lastnameValidator(request)}`;
        return response.send('validation failed');
    }
    let duplicateUser = await User.findOne({ _id: newid });
    console.log(username);
    console.log(duplicateUser.username);
    if (duplicateUser.username === username) {
        let update = { username: username, password: password, firstName: firstName, lastName: lastName, gender: gender };
        let doc = await User.findByIdAndUpdate(id.trim(), update);
        doc = await User.findOne({ _id: newid });
        return response.send(doc);
    }
    else {
        let duplicateUserChange = await User.findOne({ username: username });
        if (duplicateUserChange !== null) {
            return response.send('please try another username');
        }
        let update = { username: username, password: password, firstName: firstName, lastName: lastName, gender: gender };
        let doc = await User.findByIdAndUpdate(id.trim(), update);
        doc = await User.findOne({ _id: newid });
        return response.send(doc);
    }
};
const deleteUser = async (request, response) => {
    let { id } = request.body;
    const dletedUser = await User.findByIdAndDelete(id.trim());
    return response.send('done');
}
module.exports = { dashboard, dashboardChange, deleteUser };