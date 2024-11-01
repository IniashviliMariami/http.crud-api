import React, { useState } from 'react'

const Task = ({onFormSubmit}) => {
    const[checked,setChecked]=useState(false);
    const[Task,setTask]=useState('');
    const onFormSubmit=(e)=>{
        e.preventDefault();
        onFormSubmit(Task,checked);
    };
    
  return (
    <div>
      <form action="">
        <input type="text"
        placeholder='Enter Task' 
        onChange={(e)=>setTask(e.target.value)}
        />
         <label >
            <input type="checkbox"
            checked={checked}
            onChange={()=>setChecked(!checked)} />
            {' '}
            Mark as completed
         </label>
         <button type='submit'>Add Task</button>
      </form>
    </div>
  )
}

export default Task
