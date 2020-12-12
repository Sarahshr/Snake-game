import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Music from "./Music";

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: url("./medias/bg-home/jungle.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

const Container = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75%;
`;

const Title = styled.h1`
  font-family: Roller;
  font-size: 60pt;
  color: yellow;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: yellowgreen;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
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
`;
const Ok = styled.div`
  //border: 1px blue solid;
  margin-top: 5%;
`;

const Home = () => {
  return (
    <Main>
      <Container>
        <Title>Snake Game</Title>
        <Link to="/game">
          <Button>Play</Button>
        </Link>
      </Container>
      <Ok>
        <Music />
      </Ok>
    </Main>
  );
};

export default Home;
