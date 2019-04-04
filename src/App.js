import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { Switch, Route } from "react-router-dom";
import './App.css';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />

      </div>
    );
  }
}

export default App;
