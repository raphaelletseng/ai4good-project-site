import React, {Component} from 'react';
import {motion} from 'framer-motion';
import Gal from './gal.png';
import Gal2 from './colour-gal.png';
import logo from './logo.png';
import Button from '../Button.js';

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
          <li><a className = "smoothscroll" href="#target">Target</a></li>
          <li><a className = "smoothscroll" href="#map">Maps</a></li>
          <li><a className = "smoothscroll" href="#aboutus">About Us</a></li>

        </ul>
      </nav>

      <div className="row">
        <div className="column">
        <br/><br/><br/><br/>
        <div className="text-wrap">

            <h1>Data where it's needed</h1>
          <h3> Helping you make sustainable decisions on global development</h3>
        </div>
          <Button textcolor="#0d186e" bgcolor="rgba(202,232, 255, 0.5)">Sign Up Today
            <i class="fa fa-chevron-right" aria-hidden="true"></i></Button>


          <br/>
          <br/>


        </div>

        <div className="column">
          <br/><br/>
          <motion.img
            src={Gal2}
            alt = "School person"
            animate={{y:[0,10,0]}}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}>
          </motion.img>


        </div>


      </div>



      <p className = "scrolldown">
        <a className = "smoothscroll" href="#motivation"><i className = "fa fa-chevron-down"></i></a>
      </p>




    </header>
    );
  }

}
export default Landing;
