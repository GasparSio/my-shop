function lorError(err, req, res, next){
    console.error(err);
    next(err);
};

function errorhandler(error, req, res, next){
    res.status(500).json({
        message: error.message,
        stack: error.stack
    });
}


module.exports = { lorError, errorhandler }