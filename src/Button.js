import styled from '@emotion/styled';

export default styled('a')`
  float: left;
  margin-left: 20%;
  font-family: 'opensans-bold', sans-serif;
  font-size: ${props=>props.fontsize};
  letter-spacing: 1.2px;
  padding: 10px 22px;
  left: 30px;
  top: -8px;
  color: ${props =>props.textcolor};
  background-color: rgba(0,0,0,0);
  display: inline-block;
  margin-top: 2px;
  text-weight: bold;
  text-decoration: none;
  line-height: 20px;
  font-weight: bold;
  min-width: 150px;
  text-align:center;
  border: 2px solid;
  border-color: ${props =>props.textcolor};
  border-radius: 2.0em;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
  :hover{
    transform: scale(1.05);
    background-color: ${props=>props.bgcolor};
    color: ${props=>props.textcolor};
    transition: 0.2s;
    cursor: pointer;
  }
  :active{
    transform: scale(0.95);
  }
`;
