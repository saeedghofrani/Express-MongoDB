const errorHandler = (func) => {
    try {
        func;
    } catch (error) {
        console.log(error);
    }
};
module.exports = errorHandler;