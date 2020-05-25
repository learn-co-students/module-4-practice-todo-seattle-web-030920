 import React, {Component} from 'react'
// import React, {Fragment} from 'react'

const TaskList=({tasks,updateTasks})=>{
    const handleClick=(task)=>{
        return(
            // console.log(task)
         updateTasks(task)
        )
    }
    return(
        tasks.map((task,index)=>{
          return ( 
            <div className="task" key={index}>
          <div className="label">{task.category}</div>
          <div className="text">{task.text}</div>
          <button className="delete" onClick={()=>{handleClick(task)}}>X</button>
            </div>
          )

        })
    )
}

export default TaskList