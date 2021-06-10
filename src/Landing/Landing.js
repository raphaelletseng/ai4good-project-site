import React, {Component} from 'react';
import Earth from './earth.jpg';
import Earth2 from './1280px-earth.jpg';
import Gal from './gal.png';

class Landing extends Component {
  render() {
    return (
      <header id = "home">
      <nav id = "nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#home" title = "Hide navigation">Hide navigation</a>

        <ul id="nav" className="nav">
          <li className ="current"><a className = "smoothscroll" href="#home">Home</a></li>
          <li><a className = "smoothscroll" href="#motivation">Motivation</a></li>
          <li><a className = "smoothscroll" href="#maps">Maps</a></li>
          <li><a className = "smoothscroll" href="#aboutus">About Us</a></li>

        </ul>
      </nav>

      <div class="row">
        <div class="column">
        <br/><br/><br/><br/>
          <h1> datallite. </h1>
        </div>

        <div class="column">
          <img src={Gal} alt = "School person"></img>


        </div>

      </div>


      

    </header>
    );
  }

}
export default Landing;
