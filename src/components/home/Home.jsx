import React from "react";

import { Main, Container, Title, Button, MusicContainer } from "./styleHome";
import Music from "../Music";
import Game from "../game/Game";
import GameOver from "../GameOver/GameOver";

const Home = ({ alive, setAlive, setScore, score }) => {
  const handleAlive = () => {
    setAlive("play");
    setScore(0);
  };

  return (
    <Main>
      <MusicContainer>
        <Music />
      </MusicContainer>
      <Container>
        <Title>Snake Game</Title>
        {alive === "start" && <Button onClick={handleAlive}>Play</Button>}
        {alive === "play" && (
          <Game setAlive={setAlive} setScore={setScore} score={score} />
        )}
        {alive === "game over" && (
          <GameOver
            setScore={setScore}
            score={score}
            handleAlive={handleAlive}
          />
        )}
      </Container>
    </Main>
  );
};

export default Home;
