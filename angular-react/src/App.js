import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  state = {
    message: 'This is the first Message',
    rname: "Just a Name",
    occupation: "President",
    location: "Mars",
    first: "John Wick"
  }
  
  render() {
    return (
      <div className="App">
        <app-hi message={this.state.message}
              rname={this.state.rname}
              occupation={this.state.occupation}
              location={this.state.location}
              first={this.state.first}
              ref={this.handleClick}
              ></app-hi>
        <app-hi-form></app-hi-form>              
        <button onClick={this.change}>
        Change
        </button>              
      </div>
    );
  }

  handleClick = component => {
    this.component = component;
  }

  showInfo(event) {
    alert(event.detail);
  }

  componentDidMount() {
    this.component.addEventListener('display', this.showInfo);
  }

  componentWillUnmount() {
    this.component.removeEventListener('display', this.showInfo);
  }

  change = () => {
    if (this.state.message == 'hi') {
      this.setState({
        message: 'Non Hi John Wick',
        rname: 'Non Hi Someone',
        occupation: 'Non Hi President',
        location: 'Non Hi Mars',
        first: 'Non Hi John Wick'
      })
    } else {
      this.setState({
        message: 'hi',
        rname: 'Someone Hi',
        occupation: 'Hi President',
        location: 'Hi from Mars',
        first: 'Hi John Wick'
      })
    }
  }
}

export default App;
