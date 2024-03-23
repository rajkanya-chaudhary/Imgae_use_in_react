import React, { Component } from 'react'
import '../ImageExample/style.css'

export default class ImageExample extends Component {
  constructor(){
    super()
    this.state = {
      name : ""
    }
  }
  getInputData(event)
  {
   // console.log(event.target.name,event.target.value)
   this.setState({name:event.target.value})
  }
  postData()
  {
    alert(`Hello ${this.state.name}`)
  }
  render() {
    return (
      <>
        <div className="main">
          <div className="center">
            <h3>Class Componant input examle</h3>
            <h3>Name : {this.state.name}</h3>
            <input type="text"name="name" onChange={(event)=>this.getInputData(event)} placeholder='Enter full name' />
            <button onClick={()=>this.postData()}>Submit</button>
          </div>
        </div>
      </>
    )
  }
}
