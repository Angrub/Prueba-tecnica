const { Router } = require('express');
const { usersRouter } = require('./users/users.controller');
const router = Router();

router.use('/users' ,usersRouter);

module.exports = { mainRouter: router }