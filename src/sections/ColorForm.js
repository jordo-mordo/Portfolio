import {useState} from 'react';
import styled from 'styled-components';

const ColorForm = () => {
  const [colors, setColors] = useState({
    dark: '',
    darker: '',
    light: '',
    lighter: '',
  });

  const inputHandler = (e) => {
      e.preventDefault();
      setColors({...colors, [e.target.name]: e.target.value});
  };

  const submitColors = (e) => {
    e.preventDefault();
    let errors = [];

    Object.entries(colors).forEach((entry) => {
      const [key, val] = entry;
      if (!val.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/) || val !== '') {
        errors.push(key);
      }
    });

    if (errors.length) {
      alert(`${errors.join(', ')} need(s) a valid hexadecimal color!`);
      return;
    }

    let r = document.querySelector(':root');
    Object.entries(colors).forEach((entry) => {
      r.style.setProperty(`--${entry[0]}`, entry[1]);
    });
  }

  return (
    <Container>
      <h3>Dark: </h3>
      <input type="text" name="dark" onChange={inputHandler}/>
      <h3>Darker: </h3>
      <input type="text" name="darker" onChange={inputHandler}/>
      <h3>Light: </h3>
      <input type="text" name="light" onChange={inputHandler}/>
      <h3>Lighter: </h3>
      <input type="text" name="lighter" onChange={inputHandler}/>
      <button onClick={submitColors}>Change Colors!</button>
    </Container>
  );
}

export default ColorForm;

const Container = styled.div`
  color: var(--1);
  display: flex;
  flex-flow: wrap column;
  align-items: flex-start;

  button{
    margin: 2em 0;
  }
`;