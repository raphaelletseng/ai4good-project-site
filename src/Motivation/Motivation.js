import React, {Component} from 'react';
import Title from '../Title.js';

class Motivation extends Component{
  render(){
    return(
      <section id = "motivation">
        <div className="motivation">
          <div className ="wrapper">
            <div className = "column1">
              <div class = "inner-column">
               <Title titleColor = '#0d186e'>Motivation</Title>
              </div>
            </div>
          </div>

        <div className="wave-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#CAE8FF" fill-opacity="1" d="M0,128L60,133.3C120,139,240,149,360,138.7C480,128,600,96,720,106.7C840,117,960,171,1080,202.7C1200,235,1320,245,1380,250.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>
        </div>
      </section>
    );
  }
}
export default Motivation;
