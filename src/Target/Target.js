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
      <Title titleColor= "#0d186e">Who benefits?</Title>
      <h3> We aim to fill existing gaps in data to allow for better
      policy making and more effective intervention. </h3>
      <br/>
        <div class = "container">
          <div class ="box">
            <img src={Lagos} alt="Lagos"/>
          </div>
          <div class ="box"><img src={Classroom} alt="Lagos class"/></div>
            <h3> Non-Governmental Organisations </h3>
            <h3> Government Policy Makers </h3>
          <div class ="box"><img src={Un} alt="conf room"/></div>
          <div class ="box"><img src={Desktop} alt="desktop"/></div>
            <h3> Global Organisations </h3>
            <h3> Academic Researchers & Students </h3>
        </div>

      </section>
    );
  }
}
export default Target;
