import './App.css';
import styled from 'styled-components';
import ColorForm from './sections/ColorForm';
import Nav from './sections/Nav';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';

function App() {

  return (
    <div className="App">
      <Nav/>
      <AppContainer>
        <About />
        <TechStack />
        <Projects />
      </AppContainer>
    </div>
  );
}

export default App;

const AppContainer = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
`;

