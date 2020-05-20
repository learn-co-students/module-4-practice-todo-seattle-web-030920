import React from 'react';
import Task from './Task';
import TaskForm from './TaskForm'

class TaskBrowser extends React.Component {
    state = {
        text: ''
    }

    renderTasks = () => {
        const { taskList } = this.props
        return taskList.map((task, index) => <Task key={index} category={task.category} text={task.text} />)
    }

    changeText = event => {
        this.setState({text: event.target.value})
    }

    render() {
        const { onSubmitForm } = this.props
        return (
            <div className="tasks">
                <h5>Tasks</h5>
                <TaskForm text={this.state.text} onChangeText={this.changeText} onSubmitForm={onSubmitForm} />
                <div>
                    {this.renderTasks()}
                </div>
            </div>
        )
    }
}

export default TaskBrowser
