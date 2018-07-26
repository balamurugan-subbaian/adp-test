import React, { Component } from 'react';
import './App.css';
import AppBar from './Common/AppBar';
import SideBar from './Common/SideBar';
import Main from './Components/Main';

class App extends Component {
  render() {
    return (
      <div className="app">
       <AppBar />
        <div className="app-container">
          <SideBar />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
