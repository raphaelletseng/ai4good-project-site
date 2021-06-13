import React, {Component} from 'react';
import {motion} from 'framer-motion';
import Earth from './earth.jpg';
import Earth2 from './1280px-earth.jpg';
import Gal from './gal.png';
import Gal2 from './gal2.png';
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
          <li><a className = "smoothscroll" href="#map">Maps</a></li>
          <li><a className = "smoothscroll" href="#aboutus">About Us</a></li>

        </ul>
      </nav>

      <div class="row">
        <div class="column">
        <br/><br/><br/><br/>
        <div className="text-wrap">
          <motion.h1
            animate={{
              x:[0, 2, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}>
            DATALLITE</motion.h1>
          <h1> Quenching Data Droughts For Sustainable Development </h1>
          <h3> Here goes some text explaining in brief what we do. <br/> And maybe cat things. </h3>
        </div>
          <Button textcolor="#0d186e" bgcolor="rgba(202,232, 255, 0.5)">I'm an NGO
            <i class="fa fa-chevron-right" aria-hidden="true"></i></Button>

          <Button textcolor="#fff" bgcolor="#335899" style={{marginLeft: 20}}>I'm a Gov org
            <i class="fa fa-chevron-right" aria-hidden="true"></i></Button>
          <br/>
          <br/>


        </div>

        <div class="column">
          <br/><br/>
          <motion.img
            src={Gal}
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
