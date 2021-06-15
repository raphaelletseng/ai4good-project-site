import React from 'react';
import styled from '@emotion/styled';

const Title = styled('div')`
  font-family: 'Trebuchet MS', sans-serif;
  font-size: 2.5em;
  letter-spacing: 2px;
  font-weight: bolder;
  color: ${props =>props.titleColor};
  padding-top: 0.33em;
  margin-bottom: 0em;
  padding-bottom: 0.33em;
  padding-left: 0.2em;
  padding-right: 0.2em;
  border-radius: 2%;
  width: 60%;
  min-width: 30%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.3em;
  position: relative;
  z-index: 1;
  /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);*/
  @media screen and (max-width: 700px){
    font-size: 1.5em;
  }
`;

export default ({children, titleColor})=>(
  <React.Fragment>

    <Title titleColor = {titleColor}>{children}</Title>

  </React.Fragment>
)
