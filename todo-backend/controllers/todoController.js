const todoService=require('../services/todoService');

exports.addTodo=async(req,res)=>{
    try{
        const {text}=req.body;
        const todo=await todoService.addTodo(text);
        res.status(201).json(todo);
    }catch(error){
        console.error('Error adding todo:',error);
        res.status(error.status||500).json({error:error.message||'Failed to add todo'});
    }
}

exports.getTodos=async(req,res)=>{
    try{
        const todos=await todoService.getTodos();
        res.status(200).json(todos);
    }catch(error){
        console.error('Error getting todos:',error);
        res.status(error.status||500).json({error:error.message||'Failed to get todos'});
    }
}

exports.updateTodo=async(req,res)=>{
    try{
        const {id,text}=req.body;
        const todo=await todoService.updateTodo(id,text);
        res.status(200).json(todo);
    }catch(error){
        console.error('Error updating todo:',error);
        res.status(error.status||500).json({error:error.message||'Failed to update todo'});
    }
}

exports.deleteTodo=async(req,res)=>{
    try{
        const { id } = req.params;
        const todo=await todoService.deleteTodo(id);
        res.status(200).json(todo);
    }catch(error){
        console.error('Error deleting todo:',error);
        res.status(error.status||500).json({error:error.message||'Failed to delete todo'});
    }
}
exports.toggleTodo = async (req, res) => {
    try {
      const { id } = req.params;
      const { completed } = req.body;
      const todo = await todoService.toggleTodo(id, completed);
      res.json(todo);
    } catch (error) {
      res.status(error.status || 500).json({ error: error.message });
    }
  };