import React, {Component} from 'react';
import Title from '../Title.js';
import Dashboard from './dashboard.png';
import Button from '../Button.js';

class Maps extends Component{
  render(){
    return(
      <section id = "map">

        <div class = "row">
          <div class = "column">
          <div className = "container-title">
          <svg viewBox="40 70 200 100" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ffff66" d="M58.1,-13.9C64.1,-0.3,50.2,24.8,34.4,32.8C18.7,40.8,1.1,31.7,-17.8,19.2C-36.8,6.7,-57.1,-9.2,-54.3,-18.3C-51.6,-27.4,-25.8,-29.7,0.1,-29.7C26,-29.8,52.1,-27.6,58.1,-13.9Z" transform="translate(100 100)" />
          </svg>
            <Title id="titre" titleColor = '#0d186e'>The Launch Pad</Title>
          </div>
          <h3> Customizable data based on your goals </h3>
          <div className="button">
          <Button textcolor="#0d186e" bgcolor="rgba(202,232, 255, 0.5)">Request Data
            <i class="fa fa-chevron-right" aria-hidden="true"></i></Button>
          </div>
          </div>
          <div class="column">
              <img src = {Dashboard} alt = "Dashboard Launch Pad"></img>
          </div>
        </div>


      </section>
    );
  }
}
export default Maps;
