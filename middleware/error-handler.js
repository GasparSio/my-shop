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
};

function boomErrorhandler(error, req, res, next){
    if(error.isBoom){
        const { output } = error;
        res.status(output.statusCode).json(output.payload);
    }else{
        next(error);
    }
}


module.exports = { logError, errorhandler, boomErrorhandler}