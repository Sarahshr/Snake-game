import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("./assets/images/jungle.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

export const Container = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 75%;
  height: 50%;
`;

export const Title = styled.h1`
  font-family: Roller;
  font-size: 60pt;
  color: yellow;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: yellowgreen;
`;

export const Button = styled.button`
  width: 15%;
  cursor: pointer;
  -moz-box-shadow: 0.5px 0.5px 5px 2px yellowgreen;
  -webkit-box-shadow: 0.5px 0.5px 5px 2px yellowgreen;
  -o-box-shadow: 0.5px 0.5px 5px 2px yellowgreen;
  box-shadow: 0.5px 0.5px 5px 2px yellowgreen;
  filter: progid:DXImageTransform.Microsoft.Shadow(color=yellowgreen, Direction=134, Strength=5);
  font-size: 20pt;
  color: yellowgreen;
  background-color: yellow;
  border-radius: 15px;
  border-color: rgba(0, 0, 0, 0);
  margin-bottom: 10%;
`;
export const MusicContainer = styled.div`
  //border: 1px blue solid;
  margin-left: 80%;
  margin-top: 5%;
`;
