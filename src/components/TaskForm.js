import React from 'react';

const TaskForm = ({ text, onChangeText, onSubmitForm }) => {
    const handleSubmit = event => {
        onSubmitForm(event)
    }

    return (
        <form className="new-task-form" onSubmit={handleSubmit}>
            <input placeholder="New task details" type="text" value={text} onChange={onChangeText} />
            <select>
                <option>Code</option>
                <option>Food</option>
                <option>Money</option>
                <option>Misc</option>
            </select>
            <input type="submit" value="Add task" />
        </form>
    )
}

export default TaskForm
