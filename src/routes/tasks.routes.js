const {Router} = require('express');
const pool = require('./db')
const router = Router();
const {getAllTasks, getTask, deleteTask, createTask, updateTask} = require ('../controllers/task.controller')

router.get('/tasks', getAllTasks)

router.get('/tasks/:id', getTask)


router.delete('/tasks/:id', deleteTask )

router.post('/tasks',createTask)


router.put('/tasks/:id',updateTask)

module.exports = router;