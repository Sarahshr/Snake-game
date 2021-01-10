import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 10%;
  height: 500px;
  width: 300px;

  //background-color: rgba(255, 255, 255, 0.5);
`;

export const Title = styled.h2`
  color: yellow;
  font-size: 30pt;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: yellowgreen;
`;

export const Score = styled.span`
  color: yellow;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: yellowgreen;
`;

export const Button = styled.button`
  width: 50%;
  height: 20%;
  cursor: pointer;
  -moz-box-shadow: 0.5px 0.5px 5px 2px yellowgreen;
  -webkit-box-shadow: 0.5px 0.5px 5px 2px yellowgreen;
  -o-box-shadow: 0.5px 0.5px 5px 2px yellowgreen;
  box-shadow: 0.5px 0.5px 5px 2px yellowgreen;
  filter: progid:DXImageTransform.Microsoft.Shadow(color=yellowgreen, Direction=134, Strength=5);
  font-size: 15pt;
  color: yellowgreen;
  background-color: yellow;
  border-radius: 15px;
  border-color: rgba(0, 0, 0, 0);
`;
