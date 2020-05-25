import React, {Component} from 'react'
import TaskList from './TaskList'

export default class Tasks extends Component{
displayTasks=()=>{
//   return console.log(selected)
    const {selected,tasks,updateTasks} = this.props
   const arr = tasks.filter(task=>{
       if(selected!=="All"){
        return task["category"]===selected}
        else{
        return tasks
        }}
    
    )
   return  <TaskList tasks={arr} updateTasks={updateTasks}/>

}
    render(){
        // const {selected,tasks} = this.props
        return(
            <>
                 {this.displayTasks()}
             </>   
        )
    }
}