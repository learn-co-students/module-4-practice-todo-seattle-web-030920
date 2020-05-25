import React,{Component} from 'react'

const ToggleBtn=({showForm,toggle})=>{

    return(
        <button onClick={toggle} className={`toggle ${showForm? "on":"notOn"}`}>
            {`${showForm}`?"Stretch features enabled":"Stretch features disabled"}</button>
    )
}
export default ToggleBtn