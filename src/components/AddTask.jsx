import React, { useState } from 'react'

const AddTask = ({addTask,tasks}) => {
    const [value,setValue] = useState("")

    const addItem = ()=>{

        if(value.trim() ===""){
            alert("Input field is empty")   
            return 
        }
        const isDuplicate = tasks.some((task)=>task.title===value)
if(isDuplicate){
    alert("Task already exists!")
    setValue("")
    return
}
addTask(value)
setValue("")
    }


    

  return (
    <>
        <div className='input-container'>
             <input type="text" value={value} className='input' placeholder='Add a new Task'
              onChange={(e)=>setValue(e.target.value)} />

             <button onClick={addItem} className='add-btn'>ADD</button>
        </div>
    </>
  )
}

export default AddTask