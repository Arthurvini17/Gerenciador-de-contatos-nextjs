const express = require('express');
const router = express.Router();


const UserController = require('../Controllers/UserController');

//passando as rotas que irei utilizar 
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUser);
router.put('/:id', UserController.updateUser)
router.post('/', UserController.createManyUsers);
router.delete('/:id', UserController.deleteUser);



module.exports = router

