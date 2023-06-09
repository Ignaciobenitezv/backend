const pool = require('../routes/db')


const getAllTasks = async (req, res,next)=>{

try {
    const Alltasks = await pool.query('SELECT * FROM tasks')
    
    res.json(Alltasks.rows)
} catch (error) {
    next(error)
    
}}

const getTask = async (req, res,next)=>{
    try {
        const {id} = req.params
        const result = await pool.query('SELECT * FROM tasks WHERE id =$1', [id])
        console.log(result)
        if (result.rows.length === 0)
            return res.status(404).json({
                message:"Task Not Found"
            })
        res.json(result.rows[0])
    } catch (error) {

        next(error)
        
    }
    
}

const deleteTask = async (req, res, next)=>{
    
        const {id} = req.params;
        try {
            const result = await pool.query("DELETE FROM tasks WHERE id=$1",[id])
        if (result.rows.length === 0)
            return res.status(404).json({
                message:"no existe la tarea",
            });

            return res.sendStatus(204);
        } catch (error) {
            next(error)
            
        }
            
}

const createTask = async (req, res, next)=>{
    const {title, description} = req.body
   try {
    const result = await pool.query('INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *', [title, description,]);
   console.log(result)
       res.json(result.rows[0]);
    
   } catch (error) {
    next(error);
    
   }
}

const updateTask = async (req, res, next)=>{
    try {
         
        const result = await pool.query("UPDATE tasks SET title = $1, description = $2 WHERE id =$3 RETURNING *",[title, description, id]);
    if (result.rows.length === 0)
            return res.status(404).json({
                message:"no existe la tarea",
            });
    console.log(result);
    return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
    


   res.send('Updating a task');
};

module.exports = {
    getAllTasks, 
    getTask,
    deleteTask,
    createTask,
    updateTask


}