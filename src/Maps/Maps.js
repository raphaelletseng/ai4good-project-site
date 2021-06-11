import React, {Component} from 'react';
import Title from '../Title.js';
import Nigeria from './nigeria-stan.png';
import Tanzania from './tanzania-stan.png'

class Maps extends Component{
  render(){
    return(
      <section id = "map">
            <Title titleColor = '#0d186e'>Maps</Title>

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
