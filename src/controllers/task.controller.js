const pool = require('../routes/db')


const getAllTasks = async (req, res)=>{

try {
    const Alltasks = await pool.query('SELECT * FROM tasks')
    
    res.json(Alltasks.rows)
} catch (error) {
    console.log(error.message)
    
}}

const getTask = async (req, res)=>{
    res.send('Retrieving one task');
}

const deleteTask = async (req, res)=>{
    res.send('Deleting a task');
}

const createTask = async (req, res)=>{
    const {title, description} = req.body
   try {
    const result = await pool.query('INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *', [title, description,]);
   console.log(result)
       res.json(result.rows[0]);
    
   } catch (error) {
    res.json({error: error.message});
    
   }
}

const updateTask = async (req, res)=>{
   res.send('Updating a task');
}

module.exports = {
    getAllTasks, 
    getTask,
    deleteTask,
    createTask,
    updateTask


}