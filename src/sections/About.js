import styled from 'styled-components';
import Container from '../components/Container';

export default function About() {
  return(
    <Container bg={['5', '4']}>
      <Title>
        <p>{'<'}&nbsp;</p>
        <h1>Jordan Moore</h1>
        <p>&nbsp;{' />'}</p>
      </Title>
      <Description>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien mi, maximus a aliquam ac, tincidunt a diam. Mauris et nisi in odio vehicula cursus quis in metus. Aenean faucibus sit amet lorem id egestas. Mauris est mauris, interdum in ex at, convallis laoreet ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec gravida nibh eget erat dapibus, vel egestas nisl molestie. Sed eu vulputate leo, ut lacinia nibh.</p>
      </Description>
    </Container>
  )
};

// const Container = styled.section`
//   padding: 0 10%;
//   height: 90vh;
//   outline: 1px solid black;
//   background: var(--1);

//   scroll-snap-align: start;


//   display:flex;
//   flex-direction: column;
//   justify-content:center;
//   align-items:center;
// `;

const Description = styled.div`
  width: 75%;
  padding-left: 10%;
  p {
    font-size: 1.5em;
    line-height: 1.5em;
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