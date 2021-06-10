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
            <div class = "blob-wrap">

              <img src={Haoyi} alt = "Haoyi Qiu"></img>
              <svg viewBox="40 24 160 150" xmlns="http://www.w3.org/2000/svg">
  <path fill="#335899" d="M30,-36.7C36.4,-30.3,37.5,-18.6,44.3,-4.3C51,10.1,63.4,26.9,62.3,42.7C61.2,58.4,46.5,73,30.8,74.1C15.1,75.2,-1.6,62.8,-16.5,53.8C-31.4,44.7,-44.4,38.9,-50.3,28.9C-56.2,19,-55,4.7,-49.6,-5.7C-44.1,-16.2,-34.5,-22.9,-25.6,-28.8C-16.6,-34.8,-8.3,-39.9,1.7,-41.9C11.8,-44,23.5,-43,30,-36.7Z" transform="translate(100 100)" />
</svg>
            </div>
              <div class = "container">
                <h2> Haoyi Qiu </h2>
                <p> Awesome pawesome! </p>
                <p><button class = "button"> Linkedin </button></p>
              </div>
            </div>
          </div>

          <div class = "column">
            <div class = "card">

            <div class = "blob-wrap">
            <img src={Raph} alt = "Raphaelle Tseng"></img>

            <svg viewBox="30 10 160 150" xmlns="http://www.w3.org/2000/svg">
              <path fill="#335899" d="M54.3,-53.6C69.3,-39.3,79.7,-19.7,76,-3.8C72.2,12.1,54.3,24.3,39.3,35.6C24.3,47,12.1,57.6,1.2,56.5C-9.8,55.3,-19.6,42.4,-31.4,31C-43.2,19.6,-57,9.8,-58.6,-1.6C-60.3,-13.1,-49.8,-26.2,-38,-40.5C-26.2,-54.7,-13.1,-70.3,3.3,-73.5C19.7,-76.8,39.3,-67.9,54.3,-53.6Z" transform="translate(100 100)" />
            </svg>
            </div>

              <div class = "container">
                <h2> Raphaelle Tseng </h2>
                <p> Awesome pawesome! </p>
                <p><button class = "button"> Linkedin </button></p>
              </div>
            </div>
          </div>


          <div class = "column">
            <div class = "card">
            <div class = "blob-wrap">

              <img src={Tino} alt = "Tino Matsika"></img>
              <svg viewBox="0 25 160 150" xmlns="http://www.w3.org/2000/svg">
  <path fill="#335899" d="M34.3,-44.2C44.7,-32,53.7,-21.6,55.4,-10.1C57,1.4,51.3,13.8,45.4,28.1C39.4,42.4,33.3,58.6,23.3,60.8C13.3,63.1,-0.6,51.4,-14.6,44.5C-28.7,37.5,-42.9,35.2,-49.1,27.1C-55.3,18.9,-53.6,4.9,-49.5,-7C-45.4,-19,-38.9,-28.9,-30.3,-41.3C-21.7,-53.8,-10.8,-68.9,0.5,-69.5C11.9,-70.1,23.8,-56.3,34.3,-44.2Z" transform="translate(100 100)" />
</svg>
              </div>
              <div class = "container">

                <h2> Tinotenda Matsika </h2>
                <p> Awesome pawesome! </p>
                <p><button class = "button"> Linkedin </button></p>
              </div>
            </div>
          </div>

          <div class = "column">
            <div class = "card">
            <div class = "blob-wrap">

              <img src={Rayan} alt = "Rayan Awad Alim"></img>
              <svg viewBox="14 10 160 150" xmlns="http://www.w3.org/2000/svg">
<path fill="#335899" d="M41.5,-35.3C56.1,-27,71.8,-13.5,72.4,0.7C73.1,14.9,58.9,29.7,44.3,39.6C29.7,49.4,14.9,54.2,-2.4,56.7C-19.8,59.1,-39.5,59.2,-54.7,49.4C-69.9,39.5,-80.6,19.8,-78.1,2.4C-75.7,-14.9,-60.2,-29.8,-45,-38.2C-29.8,-46.6,-14.9,-48.4,-0.7,-47.7C13.5,-47,27,-43.7,41.5,-35.3Z" transform="translate(100 100)" />
</svg>
              </div>
              <div class = "container">
                <h2> Rayan Awad Alim </h2>
                <p> Awesome pawesome! </p>
                <p><button class = "button"> Linkedin </button></p>
              </div>
            </div>
          </div>

          <div class = "column">
            <div class = "card">
            <div class = "blob-wrap">

              <img src={Michelle} alt = "Michelle Murphy"></img>
              <svg viewBox="22 30 160 150" xmlns="http://www.w3.org/2000/svg">
  <path fill="#335899" d="M42.5,-47.2C58.1,-37.6,75.7,-27,79.7,-12.8C83.8,1.5,74.3,19.5,61.2,29C48.1,38.5,31.5,39.5,15.1,48.4C-1.2,57.4,-17.1,74.1,-25.7,70.9C-34.3,67.7,-35.6,44.5,-41.2,27.3C-46.9,10.2,-57,-0.8,-58.8,-13.8C-60.5,-26.7,-53.9,-41.6,-42.8,-51.9C-31.6,-62.3,-15.8,-68.2,-1.2,-66.9C13.5,-65.5,27,-56.8,42.5,-47.2Z" transform="translate(100 100)" />
</svg>
            </div>
              <div class = "container">
                <h2> Michelle Murphy </h2>
                <p> Awesome pawesome! </p>
                <p><button class = "button"> Linkedin </button></p>
              </div>
            </div>
          </div>
          </div>
        <div class="wave-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0D186E" fill-opacity="1" d="M0,256L40,240C80,224,160,192,240,170.7C320,149,400,139,480,149.3C560,160,640,192,720,208C800,224,880,224,960,218.7C1040,213,1120,203,1200,170.7C1280,139,1360,85,1400,58.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        </div>


      </section>
    );
  }
}
export default AboutUs;
