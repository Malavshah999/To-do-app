import React from "react"

class Loggin extends React.Component {
    constructor(){
      super()
      this.state={
        loggedIn : true
      }
      this.handleClick = this.handleClick.bind(this)
    }
   handleClick(){
      this.setState(prevState => {
        return{
          loggedIn : !prevState.loggedIn
        }
      })   
  }
    render (){
      let buttonText = this.state.loggedIn ? "Logged In" : "Logged Out"
      return( 
            <div>
              <button onClick={this.handleClick}>{buttonText}</button>
            </div> )
    }
  }
  export default Loggin