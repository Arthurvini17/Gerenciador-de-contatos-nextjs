const express = require('express');
const router = express.Router();


const UserController = require('../Controllers/UserController');

//passando as rotas que irei utilizar 
router.get('/', UserController.getAllUsers);



module.exports = router

