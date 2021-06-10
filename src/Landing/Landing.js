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


      <div class="wave-container">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#CAE8FF" fill-opacity="1" d="M0,128L40,144C80,160,160,192,240,176C320,160,400,96,480,74.7C560,53,640,75,720,96C800,117,880,139,960,154.7C1040,171,1120,181,1200,202.7C1280,224,1360,256,1400,272L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      </div>

    </header>
    );
  }

}
export default Landing;
