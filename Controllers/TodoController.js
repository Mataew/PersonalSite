const Todo = require('../Models/Todo')

module.exports.todoController = {
  addTodo: async (req, res) => {
    try {
      await Todo.create({
        todo: req.body.todo
      })
      res.json('Задачка добавлена')
    } catch (e) {
      res.json(e.message)
    }
  },
  completeTodo: async (req, res) => {
    try {
      await Todo.findByIdAndUpdate(
        req.params.id,
        {
          completed: req.body.completed
        },
        { new: true}
      )
      res.json('Выполнено!')
    } catch (e) {
      res.json(e.me)
    }
  },
  deleteTodo: async (req, res) => {
    try {
      await Todo.findByIdAndDelete(req.params.id)
      res.json('Удалено')
    } catch (e) {
      res.json(e.message)
    }
  },
  getTodos: async (req, res) => {
    try {
      const todos = await Todo.find()
      res.json(todos)
    } catch (e) {
      res.json(e.message)
    }
  }
}