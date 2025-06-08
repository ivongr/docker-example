const express = require('express');
const { index, getUsers, getCompanys } = require('../controllers/index');

const appRouter = express.Router();

appRouter.get('/index', index);

appRouter.get('/users', getUsers);

appRouter.get('/companys', getCompanys);

module.exports = appRouter;
