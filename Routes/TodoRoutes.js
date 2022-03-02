const { Router } = require('express')
const { todoController } = require('../Controllers/TodoController')
const router = Router()

router.get('/todos', todoController.getTodos)
router.post('/todos', todoController.addTodo)
router.delete('/todos/:id', todoController.deleteTodo)
router.patch('/todos/~:id', todoController.completeTodo)

module.exports = router