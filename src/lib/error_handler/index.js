const errorHandler = (res, req, next, error) => {
    if(error.status === undefined) return;

    res.sendStatus(error.status).json(error.message);
}

module.exports = { errorHandler }