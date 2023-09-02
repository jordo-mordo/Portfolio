import {useState, useEffect} from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import {frontEnd, backEnd} from '../techData.js';
const techList = [...frontEnd, ...backEnd]

export default function TechStack() {

  return(
    <Container>
      <Title>Tech Stack:</Title>
      <CardContainer>
        {techList.map((data, index) => (
          <Card href={data.link} target="_blank" rel="noreferrer" key={index}>
            <Logo className="logoVector" name={data.name}/>
            <h3>{data.name}</h3>
          </Card>
        ))}
      </CardContainer>
    </Container>
  )
};

const Title = styled.h1`
  align-self: start;
  color:white;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items:center;
  justify-content:start;
  width: 100%;
  height: 20em;

  a{
    text-decoration:none;
  }
`;

const Card = styled.a`
  display:flex;
  flex-direction:column;
  margin:1em;
  background: white;
  color:black;
  padding:0.7em;
  border-radius: 10%;
  text-align: center;
  transition: all 0.2s;

  width:7em;
  height:7em;

  h3{
    font-size: 100%;
    padding:0;
    margin:0;
  }

  :hover{
    margin: .5em;
    width: 8em;
    height:8em;
  }
`;

const Logo = styled.div`
  ${({name}) => `background-image: url(./logos/${name.replace(' ','')}.svg);`}
  background-repeat: no-repeat;
  background-size: 100% 100%;

  width:100%;
  height:100%;

`;
