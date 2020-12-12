import React from "react";
import styled from "styled-components";

const FoodStyled = styled.div`
  position: absolute;
  background-color: red;
  border: 1px white;
  width: 2%;
  height: 2%;
  left: ${props => props.left};
  top: ${props => props.top};
`;

const Food = ({ food }) => {
  return <FoodStyled top={`${food[1]}%`} left={`${food[0]}%`} />;
};
export default Food;

/*
https://github.com/taming-the-state-in-react/react-snake/blob/master/src/App.js
https://github.com/ChigabigaChannel/react-hour-projects/blob/master/snake-game/src/App.js
https://fr.reactjs.org/docs/hooks-effect.html
*/
