import styled from 'styled-components';

export default function Nav () {

  return(
    <Container>
      <a>About</a>
      <a>Tech-Stack</a>
      <a>Projects</a>
      <a>Contact</a>
    </Container>
  )
};

const Container = styled.div`
  position:absolute;
  z-index:1000;
  width: 100%;
  background: black;
  display:none;
  color:white;

  font-size: 2em;

  padding: 0.5em;
  padding-left: 10%;

  a {
    margin-right: 1em;
    text-decoration: none;
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: rgba(255,255,255, 0);
    transition: all 0.5s;
  }
  a:hover{
    text-decoration-color: rgba(255,255,255, 1);
  }
`;