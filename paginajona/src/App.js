import React, { Component } from 'react';
import Head from "./component/head";
import './App.css';
import Body from './component/body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <Head></Head>
        <Body></Body>
        </div>
       
      </div>
    );
  }
}

export default App;
