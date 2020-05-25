import React, {Component} from 'react'

export default class Form extends Component{
   state={
    text:"",
    category: "Code"
   }
    displayFilter=()=>{
       return this.props.categories.slice(1).map((category,index)=><option key={index}>{category}</option>)
    }

    handleChange=(event)=>{
        this.setState({
            category:event.target.value
        })
       }

    inputChange=(event)=>{
        // console.log(event.target.value)
        this.setState({
            text:event.target.value
        })
       }

    handleSubmit=(event)=>{
        event.preventDefault()  
        this.props.addTask(this.state)
    }
    render(){
        return(
            <div>
                <form className="new-task-form" onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.inputChange}/>
                        <select onChange={this.handleChange}>{this.displayFilter()}</select>
                    <input type="submit" value="Add task"/>
                </form>
            </div>
        )
    }
}