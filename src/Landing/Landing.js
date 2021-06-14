import React, {Component} from 'react';
import {motion} from 'framer-motion';
import Earth from './earth.jpg';
import Earth2 from './1280px-earth.jpg';
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
          <li><a className = "smoothscroll" href="#map">Maps</a></li>
          <li><a className = "smoothscroll" href="#aboutus">About Us</a></li>

        </ul>
      </nav>

      <div className="row">
        <div className="column">
        <br/><br/><br/><br/>
        <div className="text-wrap">
          <motion.h1
            animate={{
              y:[0, 5, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}>
            Quenching Data Droughts For Sustainable Development</motion.h1>
          <h3> Here goes some text explaining in brief what we do. <br/> And maybe cat things. </h3>
        </div>
          <Button textcolor="#0d186e" bgcolor="rgba(202,232, 255, 0.5)">I'm an NGO
            <i class="fa fa-chevron-right" aria-hidden="true"></i></Button>

          <Button textcolor="#fff" bgcolor="#335899" style={{marginLeft: 20}}>I'm a Gov org
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
      <div className = "wave-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 30 1440 220"><path fill="#fff" fillOpacity="1" d="M0,128L48,112C96,96,192,64,288,64C384,64,480,96,576,138.7C672,181,768,235,864,240C960,245,1056,203,1152,160C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>

      <p className = "scrolldown">
        <a className = "smoothscroll" href="#motivation"><i className = "fa fa-chevron-down"></i></a>
      </p>




    </header>
    );
  }

}
export default Landing;
