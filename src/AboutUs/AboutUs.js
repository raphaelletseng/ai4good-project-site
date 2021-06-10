import React, {Component} from 'react';
import Title from '../Title.js';
import Haoyi from './haoyi.jpg';
import Raph from './raph.jpg';
import Tino from './tino.jpg';
import Rayan from './rayan2.jpg'
import Michelle from './michelle.jpg';

class AboutUs extends Component{
  render(){
    return(
      <section id = "aboutus">
      <Title titleColor="#0d186e">About Us</Title>
        <div class = "row">
          <div class = "column">
            <div class = "card">
              <img src={Haoyi} alt = "Haoyi Qiu"></img>
              <div class = "container">
                <h2> Haoyi Qiu </h2>
                <p> Awesome pawesome! </p>
                <p><button class = "button"> Linkedin </button></p>
              </div>
            </div>
          </div>

          <div class = "column">
            <div class = "card">
              <img src={Raph} alt = "Raphaelle Tseng"></img>
              <div class = "container">
                <h2> Raphaelle Tseng </h2>
                <p> Awesome pawesome! </p>
                <p><button class = "button"> Linkedin </button></p>
              </div>
            </div>
          </div>


          <div class = "column">
            <div class = "card">
              <img src={Tino} alt = "Tino Matsika"></img>
              <div class = "container">
                <h2> Tinotenda Matsika </h2>
                <p> Awesome pawesome! </p>
                <p><button class = "button"> Linkedin </button></p>
              </div>
            </div>
          </div>

          <div class = "column">
            <div class = "card">
              <img src={Rayan} alt = "Rayan Awad Alim"></img>
              <div class = "container">
                <h2> Rayan Awad Alim </h2>
                <p> Awesome pawesome! </p>
                <p><button class = "button"> Linkedin </button></p>
              </div>
            </div>
          </div>

          <div class = "column">
            <div class = "card">
              <img src={Michelle} alt = "Michelle Murphy"></img>
              <div class = "container">
                <h2> Michelle Murphy </h2>
                <p> Awesome pawesome! </p>
                <p><button class = "button"> Linkedin </button></p>
              </div>
            </div>
          </div>

        <div class="wave-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0D186E" fill-opacity="1" d="M0,256L40,240C80,224,160,192,240,170.7C320,149,400,139,480,149.3C560,160,640,192,720,208C800,224,880,224,960,218.7C1040,213,1120,203,1200,170.7C1280,139,1360,85,1400,58.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        </div>

        </div>
      </section>
    );
  }
}
export default AboutUs;
