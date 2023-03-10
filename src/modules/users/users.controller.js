const { Router } = require('express');
const router = Router()
const service = require('./users.service');

router.get('/:id', (req, res) => {
    
});

router.get('/', async (req, res, next) => {
    try {
        const users = await service.list();
        res.json(users);
    } catch(err) {
        console.error(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        await service.create(res);
        res.sendStatus(202).json({ message: 'created' });
    } catch(err) {
        next(err)
    }
});

router.post('/', (req, res) => {
    
});

router.delete('/:id', (req, res) => {
    
});

module.exports = { usersRouter: router }