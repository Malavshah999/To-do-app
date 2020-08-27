import React from "react"

function Content (props){
  const completedStyles = {
    fontStyle : "italic" ,
    color : "#afafaf" ,
    textDecoration : "Line-through"
  }

return(
    <div className="todo-item">
        <input type= "checkbox" checked = {props.item.completed} onChange={()=> {props.handleClick(props.item.id)}} /> 
        <p style={props.item.completed ? completedStyles :null }>{props.item.text} </p>
        <hr/>
  </div>
)

}

export default Content 