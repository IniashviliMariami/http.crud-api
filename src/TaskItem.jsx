
import React, { useState } from 'react'

const TaskItem = ({task,prevStatus,key}) => {
    const[checked,setCheked]=useState(prevStatus);
    const[editing,setEditing]=useState(false);
    const[editedTask,setEditedTask]=useState(task);

    const handeleEdit=()=>{
        setEditing(true)
    }

    const handeleSave=()=>{
        setEditing(false)
    }

  return (
    <div key={key}>
        {editing?(
        <div>
            <input type="text"
            value={editedTask}
            onChange={(e)=>setEditedTask(e.target.value)} 
            />
            <button onChange={handeleSave}>save</button>
        </div>
      ):(
        <div>
            <h3>{task}</h3>
            <input
            type="chackbox"
            onChange={()=>setCheked(!checked)}
            />
            {checked? 'checked':'Unchecked'}
            <button onClick={handeleEdit}>edit</button>
      </div>
      )
    }
    </div>
  )
}

export default TaskItem
