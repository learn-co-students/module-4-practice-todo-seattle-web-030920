import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import Categories from './components/Categories'
import Taskbrowser from './components/TaskBrowser'

const TASKS = [
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
]

class App extends React.Component {

  state = {
    tasks: TASKS,
    category: 'All',
    currentTasks: TASKS
  }

  changeCategory = category => {
    let taskList
    if (category === "All") {
      taskList = this.state.tasks
    } else {
      taskList = this.state.tasks.filter(task => task.category === category)
    }
    this.setState({
      category: category,
      currentTasks: taskList
    })
  }

  submitForm = event => {
    event.preventDefault()
    let newTask = {
      text: event.target[0].value,
      category: event.target[1].value
    }
    this.setState(prev => {
      return {
        tasks: [...prev.tasks, newTask]
      }
    })
    this.changeCategory(this.state.category)
  }

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <Categories
          categoryList={CATEGORIES}
          selectedCategory={this.state.category}
          onChangeCategory={this.changeCategory}
        />
        <Taskbrowser
          taskList={this.state.currentTasks}
          onSubmitForm={this.submitForm}
        />
      </div>
    );
  }
}

export default App;
