import React , {Component } from 'react';
import './App.css';
import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput'


class App extends Component {
  state ={
    username : "Reader"
  }

  changedUserName = (event) => { 
    this.setState({username : event.target.value})

  }

  render(){
    return (
      <div className="App-header">
        <UserInput changed={ this.changedUserName} currentName={this.state.username}/>
        <UserOutput name={this.state.username} />
        <UserOutput name="Lekha"/>
        <UserOutput name="Lucky"/>
        <UserOutput name="Sree"/>
      </div>
    );
  }
 
}

export default App;
