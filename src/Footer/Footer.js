import React from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import BackToTop from 'react-back-to-top-button';
import Title from '../Title.js';

const FooterContainer = styled('div')`
  display: flex;
  background-image: linear-gradient(#0D186E, #0D186E);
  flex-direction: row;
  padding-top: 70px;
  width: 100%;
  padding-bottom: 20px;
`;

const CenterContainer = styled('div')`
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  color: #CAE8FF;
  font-weight: bold;
  margin: 0 auto;
`;

const CenterContent = styled('div')`
  flex-grow: 1;
  align-self: center;
  text-align: center;
`;

const footerLink = css`
  color: #335899 ;
  transition: opacity 0.2s;
  text-decoration: none !important;
  :hover {
    color:#FFFA6b ;
  }
`;

const SocialLinks = styled('div')`
  margin: auto;
  padding-bottom: 12px;
  padding-top: 12px;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: 2%;
  /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);*/
  display: flex;
  > a {
    font-size: 50px;
    margin: 0 30px;
    ${footerLink};
    @media only screen and (max-width: 640px){
      font-size: 20px !important;
    }
  }
  @media screen and (min-width: 320px){
    width: auto;
  }
`;



const year = new Date().getFullYear();

export default () => (
  <FooterContainer>

  <BackToTop speed = {1500}
    easing = "easeInOutQuint">
    <i id = "up-button" className = "fa fa-arrow-circle-up" ></i>
  </BackToTop>


    <CenterContainer>

      <CenterContent>
      <h1>Acknowledgements</h1>
      <p class ='footer-text'> We would like to thank our TA, Mohammad Navid Fekri,
      and our mentors, <br/> Flynn Strathearn, Anand Ankit, and Ella Wilson for their support throughout this project. </p>
      <p class = 'footer-text'> We would like to acknowledge the research done by the Stanford Sustainability and Artificial Intelligence Lab 
        and their <br/> work 'Combining Satellite Imagery and Machine Learning to Predict Poverty', as well as the pytorch replication by Jatin Mathur.</p>
      <a href="https://storyset.com/data">Data illustrations by Storyset</a>
        <p class='footer-text'>Get in contact!</p>

        <SocialLinks>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <a
            aria-label="Github"
            href="https://github.com/RayanAlim/Datallite"
            target="_blank"
            rel="noopener noreferrer"
             class='fa fa-github'
          />
          <a
            aria-label="Linkedin"
            href="https://www.linkedin.com/company/datallite/?lipi=urn%3Ali%3Apage%3Acompanies_company_index%3Bccfe3c05-3e69-444b-ba86-0054717e9c6e"
            target="_blank"
            rel="noopener noreferrer"
             class='fa fa-linkedin'
          />
           </SocialLinks>
          <br/>
        datallite. &copy; {year}
      </CenterContent>
    </CenterContainer>
  </FooterContainer>
);
