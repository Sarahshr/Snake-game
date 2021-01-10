import styled from "styled-components";

const SnakeDot = styled.div`
  position: absolute;
  width: 2%;
  height: 2%;
  background-color: yellow;
  border-radius: 3px;
  left: ${dot => dot.left};
  top: ${props => props.top};
  z-index: 1;
`;

const Snake = ({ snakeDots }) => {
  return snakeDots.map((dot, i) => (
    <SnakeDot key={i} top={`${dot[1]}%`} left={`${dot[0]}%`} />
  ));
};
export default Snake;
