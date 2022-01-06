const User = require('../models/user');
const { passwordValidator, firstnamedValidator, lastnameValidator } = require('../modules/validatior.module.js');
var mongoose = require('mongoose');
const dashboard = async (request, response) => {
    try {
        let queryID = JSON.parse(request.query.data);
        const id = mongoose.Types.ObjectId(queryID);
        const user = await User.findOne({ _id: id });
        response.render('dashboard', { data: user });
    } catch (error) {
        console.log('there is a problem in our server:' + error);
    }
};
const dashboardChange = async (request, response) => {
    try {
        let { id, username, password, firstName, lastName, gender } = request.body;
        let newid = mongoose.Types.ObjectId(id.trim());
        if (passwordValidator(request) || firstnamedValidator(request) || lastnameValidator(request)) {
            const message = `${passwordValidator(request)}, ${firstnamedValidator(request)}, ${lastnameValidator(request)}`;
            console.log(message);
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
    } catch (error) {
        console.log('changing user info has gone wrong:' + error);
    }

};
const deleteUser = async (request, response) => {
    try {
        let { id } = request.body;
        const dletedUser = await User.findByIdAndDelete(id.trim());
        console.log(dletedUser);
        return response.send('done');
    } catch (error) {
        console.log('sory problem on deletin your user name:' + error);
    }
};
module.exports = { dashboard, dashboardChange, deleteUser };