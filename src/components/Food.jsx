import React from "react";
import styled from "styled-components";

const FoodStyled = styled.div`
  position: absolute;
  background-color: red;
  border: 1px white;
  border-radius: 5px;
  width: 2%;
  height: 2%;
  left: ${props => props.left};
  top: ${props => props.top};
`;

const Food = ({ food }) => {
  return <FoodStyled top={`${food[1]}%`} left={`${food[0]}%`} />;
};
export default Food;
