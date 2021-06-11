import React, {Component} from 'react';
import Earth from './earth.jpg';
import Earth2 from './1280px-earth.jpg';
import Gal from './gal.png';
import Gal2 from './gal2.png';
import logo from './logo.png';

class Landing extends Component {
  render() {
    return (
      <header id = "home">
      <nav id = "nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#home" title = "Hide navigation">Hide navigation</a>
        <img className ="nav-logo" src={logo} alt='datallite-logo'/>
        <ul id="nav" className="nav">
          <li className ="current"><a className = "smoothscroll" href="#home">Home</a></li>
          <li><a className = "smoothscroll" href="#motivation">Motivation</a></li>
          <li><a className = "smoothscroll" href="#map">Maps</a></li>
          <li><a className = "smoothscroll" href="#aboutus">About Us</a></li>

        </ul>
      </nav>

      <div class="row">
        <div class="column">
        <br/><br/><br/><br/>
          <h1> datallite. </h1>
        </div>

        <div class="column">
          <br/><br/>
          <img src={Gal2} alt = "School person"></img>


        </div>

      </div>




    </header>
    );
  }

}
export default Landing;
