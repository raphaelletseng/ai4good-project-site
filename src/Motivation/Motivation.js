import React, {Component} from 'react';
import Title from '../Title.js';
import Human from './Solidarity-amico.png';
import Data from './Data report-amico.png';
import Ml from './Typing-bro.png';

class Motivation extends Component{
  render(){
    return(
      <section id = "motivation">
      <div className="wave-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 80 1440 280">
<path fill="#cae8ff" fill-opacity="1" d="M0,224L60,208C120,192,240,160,360,170.7C480,181,600,235,720,229.3C840,224,960,160,1080,133.3C1200,107,1320,117,1380,122.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
</svg>
      </div>

      <Title titleColor = '#0d186e'>DEVELOPING AI FOR A SUSTAINABLE FUTURE</Title>

      <h3> Currently, data on key measures of sustainable development are still lacking in much of the
      developing world. <br/>This gap in data remains a barrier in targeting interventions in regions of greatest need. </h3>
          <div className ="row">
            <div className = "column">
              <div class="img_wrap">
                <img src={Human} alt="human"></img>
                <p class="img_description">
                  In 2015, the United Nations unanimously adopted the
                  Agenda for Sustainable Development outlining a plan of action
                  to shift the world onto a sustainable and resilient path.
                  Ending poverty is the core UN Sustainable Development Goal (SDG1)
                  and directly supports other Goals.
                </p>
              </div>
              <h2 className="bold-color">Humanitarian</h2><br/><h2> Aid</h2>
            </div>

            <div className = "column">
              <div class="img_wrap">
                <img src={Data} alt="data"></img>
                <p class="img_description">
                  We propose closing the data gap for developing regions by collecting data from satellite images.
                  Compared to traditional survey collections, our method provides readable data that can be easily updated from publicly available sources.
                </p>
              </div>
              <h2 className="bold-color">Data</h2><h2> <br/>Driven Solutions</h2>
            </div>

            <div className = "column">
              <div class="img_wrap">
                <img src={Ml} alt="ml"></img>
                <p class="img_description">Utilizing machine learning, we can extract and measure
                different socioeconomic and infrastructural indicators to fuel impactful interventions
                to elevate developing countries out of poverty. We base our work on the research conducted
                by Stanford's Sustainability and Artificial Intelligence Lab.</p>
              </div>
              <h2 className="bold-color">Barrier Free</h2><h2><br/> Access </h2>
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
