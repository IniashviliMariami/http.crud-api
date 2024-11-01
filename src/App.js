import { useEffect, useState } from "react";
import Task from "./Task";
import TaskItem from "./TaskItem";



function App() {
  const API_KEY='6iq3cG-QlmfgbH3B2PUbq_QNFMEaU6jhrMMqgGnqCALw6g7abw'
  const [taskList,setTaskList]=useState([])

  const onFormSubmit=(task,checked)=>{
    fetch('/api/v1/taskList',{
      method:'POST',
      headers:{
        "Content-Type": "application/json",
        Authorization:`Bearer ${API_KEY}`,
      },
      body:JSON.stringify([{task,checked}]),
    })
    .then((res)=>{
      if(!res.ok)throw new Error('faild');
      return res.json();
    })
    .then((data)=>
    setTaskList((prev) => [
      ...prev,
      {task:data.item[0].task,checked:data.items[0].checked,id:data.items[0].uuid}
  ])
).chatch((err)=>console.log(err))
  }
useEffect(()=>{
  fetch('/api/v1/taskList',{
    method:'GET',
    header:
    {
      "Content-Type": "application/json",
        Authorization:`Bearer ${API_KEY}`,
    }
  })
  .then((res)=>{
    if(!res.ok){
      throw new Error('failed to get response');
    }
    return res.json();
  })
  .then((data)=>{
    console.log(data);
    setTaskList(data.items.map(task=>{
      return(
        {task:task,checked:task.checked,id:task._uuid})}
      ))
    })
    .chatch((err)=>{
    console.error(err)
    })
  },[])

  return (
    <div>
      <Task onFormSubmit={onFormSubmit}/>
      {taskList.map((task)=>(
        <TaskItem tast={task.task}prevStatus={task.checked} id={task.id}/>
      ))}
    </div>
  );
}

export default App;
