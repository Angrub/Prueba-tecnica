const logError = (res, req, next, error) => {
    console.log(error)
}

module.exports = { logError }