const {Router} = require('express');
const pool = require('./db')
const router = Router();
const {getAllTasks, getTask, deleteTask, createTask, updateTask} = require ('../controllers/task.controller')

router.get('/tasks', getAllTasks)

router.get('/tasks/10', getTask)


router.delete('/tasks', deleteTask )

router.post('/tasks',createTask)


router.put('/tasks',updateTask)

module.exports = router;