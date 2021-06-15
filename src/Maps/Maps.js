import React, {Component} from 'react';
import Title from '../Title.js';
import Nigeria from './nigeria-stan.png';
import Tanzania from './tanzania-stan.png'

class Maps extends Component{
  render(){
    return(
      <section id = "map">
        <div className = "container-title">
        <svg viewBox="40 70 200 100" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFFFFF" d="M58.1,-13.9C64.1,-0.3,50.2,24.8,34.4,32.8C18.7,40.8,1.1,31.7,-17.8,19.2C-36.8,6.7,-57.1,-9.2,-54.3,-18.3C-51.6,-27.4,-25.8,-29.7,0.1,-29.7C26,-29.8,52.1,-27.6,58.1,-13.9Z" transform="translate(100 100)" />
        </svg>
          <Title id="titre" titleColor = '#0d186e'>Our Datallite Solution</Title>

        </div>
        <h3> Our tool makes use of web-scraping, convolutional neural networks, and
        *layered training* to provide <br/> information on important indicators such as
        education spending and household consumption in a region.<br/> Identifying trends and
        patterns is key in ensuring resources are efficiently allocated. </h3>
        <div class = "row">
          <div class = "column">
            <img src = {Nigeria} alt="Nigeria"></img>
          </div>
          <div class="column">
              <img src = {Tanzania} alt = "Tanzania"></img>
          </div>
        </div>


      </section>
    );
  }
}
export default Maps;
