import React, {Component} from 'react';
import Title from '../Title.js';
import Human from './Solidarity-amico.png';
import Data from './Data report-amico.png';
import Ml from './Typing-bro.png';

class Motivation extends Component{
  render(){
    return(
      <section id = "motivation">


      <Title titleColor = '#0d186e'>Using AI to Address Humanitarian Challenges</Title>
      <h3> Some text here breaking down the impact </h3>
          <div className ="row">
            <div className = "column">
              <div class="img_wrap">
                <img src={Human} alt="human"></img>
                <p class="img_description">
                  In 2015, the United Nations unanimously adopted the
                  Agenda for Sustainable Development outlining a plan of action
                  to shift the world onto a sustainable and resilient path.
                </p>
              </div>
              <h2 className="bold-color">Human</h2><br/><h2> Issues</h2>
            </div>

            <div className = "column">
              <div class="img_wrap">
                <img src={Data} alt="data"></img>
                <p class="img_description">Hello data!</p>
              </div>
              <h2 className="bold-color">Data</h2><h2> Driven <br/>Solutions</h2>
            </div>

            <div className = "column">
              <div class="img_wrap">
                <img src={Ml} alt="ml"></img>
                <p class="img_description">Hello ML!</p>
              </div>
              <h2 className="bold-color">AI</h2><h2> for <br/> Social Good</h2>
            </div>

          </div>

        <div className="wave-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#CAE8FF" fill-opacity="1" d="M0,128L60,133.3C120,139,240,149,360,138.7C480,128,600,96,720,106.7C840,117,960,171,1080,202.7C1200,235,1320,245,1380,250.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>

      </section>
    );
  }
}
export default Motivation;
