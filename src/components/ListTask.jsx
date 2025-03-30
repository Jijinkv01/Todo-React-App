import React, { useState } from 'react'

const ListTask = ({task , index , removeTask,saveTask}) => {
 const [isEditing,setIsEditing] = useState(false)
 const [editedTask,setEditedTask] = useState(task.title)


 const editTask = ()=>{
  setIsEditing(true)
 }
const handleSave = ()=>{
  saveTask(index,editedTask)
  setIsEditing(false)
}
   
  return (
    <>
        <div className='list-task'>
            
           {isEditing? (
            <>
           <input type="text" value={editedTask} onChange={(e)=>setEditedTask(e.target.value)} /> 
           <button onClick={handleSave} className='save-btn'>Save</button>
           </>): (
            <>
             <span>{task.title}</span>
           <button onClick={editTask} className='edit-btn'>Edit</button>
           </>
           )}
            <button onClick={()=>{removeTask(index)}} className='delete-btn'>Delete</button>
        </div>
    </>
  )
}

export default ListTask