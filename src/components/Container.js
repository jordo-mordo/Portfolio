import styled from 'styled-components';
import {RiArrowDownSLine} from 'react-icons/ri';

export default function Container (props) {
  return (
    <StyledContainer bg={props.bg}>
      <Content>
        {props.children}
      </Content>
      {!props.bottom && <StyledArrow />}
    </StyledContainer>
  );
}

const StyledArrow = styled(RiArrowDownSLine)`
  width: 5em;
  height:auto;
`;

const Content = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-grow:1;
`;

const StyledContainer = styled.section`
  padding: 0 10%;
  min-height: 100vh;
  /* outline: 1px solid black; */
  /* background: ${props => `var(--${props.bg})`}; */
  background: ${({bg}) => `linear-gradient(0deg, var(--${bg[1]}) 0%, var(--${bg[0]}) 100%)`};

  scroll-snap-align: start;

  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
`;