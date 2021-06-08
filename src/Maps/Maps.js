import React, {Component} from 'react';
import Title from '../Title.js';

class Maps extends Component{
  render(){
    return(
      <section id = "maps">
        <div className="maps">
          <div class ="wrapper">
            <div class = "column">
              <div class = "inner-column">
               <Title titleColor = '#fff'>Maps</Title>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Maps;
