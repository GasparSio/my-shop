function logError(error, req, res, next){
    console.log('logError');
    console.error(error);
    next(error);
};

function errorhandler(error, req, res, next){
    console.log('errorhandler');
    res.status(500).json({
        message: error.message,
        stack: error.stack
    });
}


module.exports = { logError, errorhandler }