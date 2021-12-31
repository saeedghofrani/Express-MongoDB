const { writeFile } = require('fs');
const { join } = require('path');
const updateCurrentUser = (GUID, username, database) => {
    console.log(username);
    let user = database.find(obj => obj.username === username);
    if (user) {
        user.GUID = GUID;
        user.lastDate = new Date();
    }
    else {
        database.push({ GUID, username, lastDate: new Date() });
    }
    writeFile(join(__dirname, '../db/currentUsers.db.json'), JSON.stringify(database), (err) => {
        if (err) return console.log(`Error (write users json): ${err.message}`);
    });
};
const checkUser = (GUID, database, userDetailDb) => {
    let user = database.find(obj => obj.GUID === GUID);
    if (user) return userDetailDb.find(obj => obj.username === user.username);
    console.log('ssssssssssssssss');
    return user;
};
const deleteUser = (username, database) => {
    let index = database.findIndex((element) => (element.username === username));
    if (index !== -1) {
        database.splice(index, 1);
        writeFile(join(__dirname, '../db/currentUsers.db.json'), JSON.stringify(database), (err) => {
            if (err) return console.log(`Error (write users json): ${err.message}`);
        });
    }
}
const changeUser = (newUsername , GUID, database) => {
    let user = database.find(obj => obj.GUID === GUID);
    if (user) user.username = newUsername;
    writeFile(join(__dirname, '../db/currentUsers.db.json'), JSON.stringify(database), (err) => {
        if (err) return console.log(`Error (write users json): ${err.message}`);
    });
}
module.exports = { updateCurrentUser, checkUser, deleteUser, changeUser };
