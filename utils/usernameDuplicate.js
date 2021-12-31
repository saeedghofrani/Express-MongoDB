let usernameDuplicate = (newUsername, database) => {
    for (let i = 0; i < database.length; i++) {
        if (database[i].username === newUsername){
            return false;
        }
    }
    return true;
};
module.exports = usernameDuplicate;