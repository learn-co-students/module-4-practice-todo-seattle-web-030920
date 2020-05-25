import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import CategoryFilter from './components/CategoryFilter'
import Tasks from './components/Tasks.js'
import Form from './components/Form.js'
import ToggleBtn from './components/ToggleBtn.js'

class App extends React.Component {

  state = {
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ],
    selected:"All",
    showForm:false
  }

  selectedCategory=(category)=>{
    this.setState({
      selected:category
    })
  }
  updateTasks=(deleteTask)=>{
    this.setState(prev=>{
      return{
        tasks:prev.tasks.filter(task=>(task!==deleteTask))
      }
    })
  }
  addTask=(newTask)=>{
    this.setState(prev=>{
      return{
        tasks:[...prev.tasks,newTask]
      }
    })
  }
  render() {
    return (
      <div className="App">
       <ToggleBtn showForm={this.state.showForm} toggle={()=>{this.setState({showForm: !this.state.showForm})}}/>
        <h2>My tasks</h2>
        <h5>Category filters</h5>
        <CategoryFilter tasks={this.state.tasks} categories={CATEGORIES} selectedCategory={this.selectedCategory} selected={this.state.selected}/>
     <div className="tasks">
       <h5>Tasks</h5>
       {this.state.showForm?<Form categories={CATEGORIES} addTask={this.addTask}/>:""} 
        <Tasks selected={this.state.selected} tasks={this.state.tasks} updateTasks={this.updateTasks}/>
     </div>
      </div>
    );
  }
}


export default App;
