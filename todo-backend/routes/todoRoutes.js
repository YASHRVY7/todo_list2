const express = require('express');
const router=express.Router();

const todoController=require('../controllers/todoController');

router.post('/',todoController.addTodo);
router.get('/',todoController.getTodos);
router.put('/:id',todoController.updateTodo);
router.delete('/:id',todoController.deleteTodo);
router.patch('/:id',todoController.toggleTodo);

module.exports=router;
