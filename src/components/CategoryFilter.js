import React, {Component} from 'react'

export default class Display extends Component{
    showCategories=(categories)=>{
        return categories.map((ca,index)=><button key={index} onClick={this.handleSelect} className= {ca===this.props.selected?"selected":undefined}>{ca}</button>)
       
    }
    handleSelect=(event)=>{""
    //   return console.log(event.target.innerText)
        return(
            <>
            {event.target.className= "selected"}
            {this.props.selectedCategory(event.target.innerText)}
            </>
        )
    }
    render(){
        const {tasks,categories} = this.props
        return (
            <div className="categories">
                {this.showCategories(categories)}
            </div>
        )
    }
}