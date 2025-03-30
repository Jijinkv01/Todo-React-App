import React, { useState } from 'react'
import "../components/Todo.css"
import AddTask from './AddTask'
import ListTask from './ListTask'



const Todo = () => {

    const [tasks,setTasks] = useState([])

    const addTask = (title)=>{
        const newTask = [...tasks,{title}]
        setTasks(newTask)
        
    }

    const removeTask = (index)=>{
        const newTask = [...tasks]
        newTask.splice(index,1)
        setTasks(newTask)
    }
    
    const saveTask = (index,newTitle)=>{
        const updatedTask = tasks.map((task,i)=>
        i===index ? {...task,title:newTitle}:task)
        setTasks(updatedTask)
    }
   

  return (
    <>
        <div className='todo-container'>
            <div className='header'>TODO</div>
            <h1> Date: {new Date().toDateString()} 😊</h1>

            <div className='add-task'>
                <AddTask  addTask={addTask} tasks={tasks}/>
            </div>

            <div className='tasks'>
                {tasks.map((task,index)=>(
                    <ListTask  
                    task={task}
                    removeTask={removeTask}
                    index={index}
                    key={index}
                    saveTask={saveTask}
                    />
                ))}
                
            </div>
        </div>
    </>
  )
}

export default Todo