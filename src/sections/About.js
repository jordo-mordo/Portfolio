import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import profilePic from '../Assets/profile pic.png';


export default function About() {
  const boxW = '1000px';
  const contentRef = useRef();
  const boxRef = useRef();
  const picRef = useRef();
  const [picH, setPicH] = useState(0);


  useEffect(() => {
    const currentHeight = contentRef.current.clientHeight;
    setPicH(currentHeight / 2);
    console.log('test')
  }, [contentRef]);

  useEffect(() => {
    picRef.current.style.opacity = 1;
    setTimeout(() => {
      boxRef.current.style.width = boxW;
    }, 500)
  }, [])

  return(
    <Container>
      <Content ref={contentRef} boxW={boxW}>
        <ProfilePic ref={picRef} src={profilePic}/>
        <Box ref={boxRef} picH={picH}>
          <h1>Jordan Moore</h1>
        </Box>
      </Content>
    </Container>
  )
};

// const Container = styled.section`
//   padding: 0 10%;
//   height: 100vh;
//   outline: 1px solid black;
//   /* background: var(--1); */

//   scroll-snap-align: start;


//   display:flex;
//   flex-direction: column;
//   justify-content:center;
//   align-items:center;
// `;

const Content = styled.div`
  height: 25%;
  border: 1px solid green;
  display: flex;
  position: relative;
  /* width: ${({boxW}) => boxW}; */
`;

const ProfilePic = styled.img`
  height: 100%;
  position: absolute;
  left: 0;
  opacity: 0;
  transition: opacity 0.5s ease;
`;

const Box = styled.div`
  width: 0;
  height: 100%;
  background: white;
  border-radius: ${({picH}) => `0px ${picH}px ${picH}px 0px`};
  transition: width 2s ease;
  transform-origin: 0% 50%;
  margin-left: ${({picH}) => picH}px;
  padding-left: ${({picH}) => picH}px;
  color: black;
`;

const Description = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50vw;
  height: 20vh;
  padding: 1em;
  background: rgba(255,255,255,0.1);
  /* padding-left: 10%; */
  p {
    font-size: 1.5em;
    line-height: 1.5em;
    margin:0;
  }
`;

const Title = styled.div`
  display: flex;
  color: white;
  font-size: 500%;
  letter-spacing: normal;
  transition: all 2s;
  align-items: center;

  white-space: nowrap;

  h1:hover {
    letter-spacing: 0.025em;
    font-size: 220%;
  }

  h1 {
    font-size: 200%;
    letter-spacing: normal;
    transition: all 2s;
  }

  p {
    font-size: 1em;
  }
`;

const VideoBackground = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`

const VideoContent = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 100vh;
  width: 100vw;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`