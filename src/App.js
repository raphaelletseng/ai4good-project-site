import './App.css';
import React, {Component} from 'react';
import Landing from './Landing/Landing';
import Motivation from './Motivation/Motivation';
import Maps from './Maps/Maps.js';
import Footer from './Footer/Footer.js';
import AboutUs from './AboutUs/AboutUs.js';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Landing/>
        <Motivation/>
        <Maps/>
        <AboutUs/>
        <Footer/>
      </div>
    );
  }
}
export default App;
