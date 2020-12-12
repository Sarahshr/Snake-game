import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(
    to right top,
    #8b4513,
    #743811,
    #5d2c0f,
    #47210a,
    #321602
  );
`;

export const Right = styled.div`
  border: 1px solid green;
  height: 80vh;
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.h1`
  font-size: 50pt;
  color: #ff6a00;
`;

export const Score = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Apple = styled.img`
  width: 20%;
`;

export const Span = styled.span`
  font-family: "ubuntu";
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  cursor: pointer;
  -moz-box-shadow: 0.5px 0.5px 5px 2px #321602;
  -webkit-box-shadow: 0.5px 0.5px 5px 2px #321602;
  -o-box-shadow: 0.5px 0.5px 5px 2px #321602;
  box-shadow: 0.5px 0.5px 5px 2px #321602;
  filter: progid:DXImageTransform.Microsoft.Shadow(color=#321602, Direction=134, Strength=5);
  font-size: 18pt;
  color: #321602;
  background-color: #ff6a00;
  border-radius: 15px;
  border-color: rgba(0, 0, 0, 0);
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 80vh;
  width: 15%;
  border: 1px solid red;
`;

export const Arrows = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowTopContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ArrowBottomLine = styled.div``;

export const ArrowLeft = styled.img`
  width: 50px;
  transform: rotate(180deg);
  fill: red;
`;

export const ArrowTop = styled.img`
  width: 50px;
  transform: rotate(270deg);
`;

export const ArrowRight = styled.img`
  width: 50px;
`;

export const ArrowBottom = styled.img`
  width: 50px;
  transform: rotate(90deg);
`;

export const GameArea = styled.div`
  margin: 0 2%;
  background-image: url("./medias/bg-game.png");
  position: relative;
  width: 30rem;
  height: 30rem;
  -moz-box-shadow: 0.5px 0.5px 5px 2px #321602;
  -webkit-box-shadow: 0.5px 0.5px 5px 2px #321602;
  -o-box-shadow: 0.5px 0.5px 5px 2px #321602;
  box-shadow: 0.5px 0.5px 5px 2px #321602;
  filter: progid:DXImageTransform.Microsoft.Shadow(color=#321602, Direction=134, Strength=5);
`;
