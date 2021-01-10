import React from "react";

import { Container, Title, Score, Button } from "./styleGameOver";

const GameOver = ({ score, handleAlive }) => {
  return (
    <Container>
      <Title>Game Over</Title>
      <Score>Score : {score}</Score>
      <Button onClick={handleAlive}>Replay</Button>
    </Container>
  );
};
export default GameOver;
