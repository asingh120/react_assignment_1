import React, { Component } from 'react';
import Input from './Components/UserInput';
import Output from './Components/UserOutput';
import './App.css';

class App extends Component {
  state = {
    username:"abc123"
  };

  setNameHandler = () => {
    this.setState({ username: "Saint Silky"})
  };

  nameChangeHandler = (event) => {
    this.setState({ username: event.target.value })
  }

  render() {
    return (
      <div className="App">
       <Input click={this.setNameHandler.bind(this)} change={this.nameChangeHandler}/>
       <button onClick={this.setNameHandler}>Click Me</button>
       <Output user={this.state.username}/>
      </div>
    );
  }
}

export default App;
