import React from "react"
import "./index.css"
import Content from "./Content"
import todosData from "./todosData"


class App extends React.Component {
    constructor ()
    {
      super()
      this.state ={ todos: todosData }
      this.handleClick = this.handleClick.bind(this)
    }

  handleClick(id)
  {
      
    this.setState (prevState => 
      {
        const Updatetodo = prevState.todos.map(
          todo=>
          {
           if (todo.id === id)
              {
                todo.completed = !todo.completed
              }    
                  return todo 
          }
        )
      
        return{
          todos:Updatetodo 
        }
      }
    )
  }
  
  render()
  { 
      const todoItem = this.state.todos.map(
        item => <Content key={item.id} item={item} handleClick={this.handleClick}/>
      ) 
    return (
          <div className="todo-list">
            {todoItem}
          </div>
      )
  }
}
export default App