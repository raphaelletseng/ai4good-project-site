import React, {Component} from 'react';
import Title from '../Title.js';

class Motivation extends Component{
  render(){
    return(
      <section id = "motivation">
        <div className="motivation">
          <div class ="wrapper">
            <div class = "column">
              <div class = "inner-column">
               <Title titleColor = '#fff'>Motivation</Title>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Motivation;
