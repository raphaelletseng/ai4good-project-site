import React, {Component} from 'react';
import Title from '../Title.js';
import Lagos from './lagos.jpg';
import Un from './un.jpg';
import Desktop from './desktop.jpg';
import Classroom from './classroom.jpg'

class Target extends Component{
  render(){
    return(
      <section id = "target">
      <Title titleColor= "#0d186e">HOW WE CAN HELP</Title>

      <br/>
        <div class = "container">
          <div class ="box">
            <img src={Lagos} alt="Lagos"/>
            <div class="text">
              <p> We use publicly available and readily <br/> updated satellite imagery to <br/>
                  estimate date for important <br/> socioeconomic indicators of a region.</p>
            </div>
          </div>
          <div class ="box"><img src={Classroom} alt="Lagos class"/>
            <div class="text">
            <p>We identify areas of greatest need <br/> through our database to inform <br/> resource allocation decisions.</p>
            </div>
          </div>
          <div class ="box"><img src={Un} alt="conf room"/>
            <div class="text">
            <p> Our accurate technology ensures the <br/> highest quality understanding of <br/> conditions across developing regions.</p>
            </div>
          </div>
          <div class ="box"><img src={Desktop} alt="desktop"/>
            <div class="text">
            <p> We provide increased data coverage <br/> on secluded regions that are hard to <br/> reach by traditional survery collection.</p>
            </div>
          </div>

        </div>

      </section>
    );
  }
}
export default Target;
