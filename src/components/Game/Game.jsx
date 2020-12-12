import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Snake from "../Snake";
import Food from "../Food";
import {
  Container,
  Right,
  Title,
  Score,
  Apple,
  Span,
  Button,
  Left,
  Arrows,
  ArrowTopContainer,
  ArrowBottomLine,
  ArrowLeft,
  ArrowTop,
  ArrowRight,
  ArrowBottom,
  GameArea,
} from "./styleGame";

//import Music from "./Music";

const getRandomCoordinates = () => {
  let min = 2;
  let max = 96;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y];
};

const Game = () => {
  const [food, setFood] = useState(getRandomCoordinates);
  const [snakeDots, setSnakeDots] = useState([
    [0, 0],
    [2, 0],
    [4, 0],
  ]);
  const [direction, setDirection] = useState("right");
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(300);

  useEffect(() => {
    document.onkeydown = onKeyDown;
    checkBordersArea();
    checkIfEat();
    const move = setInterval(() => {
      moveSnake();
    }, speed);
    return () => clearInterval(move);
  });

  const onKeyDown = e => {
    switch (e.code) {
      case "ArrowUp":
        setDirection("up");
        break;
      case "ArrowDown":
        setDirection("down");

        break;
      case "ArrowLeft":
        setDirection("left");

        break;
      case "ArrowRight":
        setDirection("right");
        break;
    }
  };

  const moveSnake = () => {
    let dots = [...snakeDots];
    let head = dots[dots.length - 1];

    switch (direction) {
      case "right":
        head = [head[0] + 2, head[1]];
        break;
      case "left":
        head = [head[0] - 2, head[1]];
        break;
      case "up":
        head = [head[0], head[1] - 2];
        break;
      case "down":
        head = [head[0], head[1] + 2];
        break;
    }
    dots.push(head);
    dots.shift();
    setSnakeDots(dots);
  };

  const gameOver = () => {
    window.alert("game over");
    setSnakeDots([
      [0, 0],
      [2, 0],
      [4, 0],
    ]);
    setDirection("right");
    setScore(0);
    setSpeed(300);
  };
  const checkBordersArea = () => {
    let head = snakeDots[snakeDots.length - 1];
    if (head[0] === 98 || head[0] === 0 || head[1] < 0 || head[1] === 98) {
      gameOver();
    }
  };

  const checkIfEat = () => {
    let head = snakeDots[snakeDots.length - 1];
    if (head[0] === food[0] && head[1] === food[1]) {
      setFood(getRandomCoordinates());
      if (speed > 50) {
        setSpeed(speed => speed - 50);
      } else {
        setSpeed(50);
      }
      console.log(speed);
      let snake = [...snakeDots];
      snake.unshift([]);
      setSnakeDots(snake);
      setScore(score => score + 1);
    }
  };

  return (
    <Container>
      <Left>
        <Title>Snake Game</Title>
        <Score>
          <Apple src="./medias/apple.svg" />
          <Span> x </Span>
          {score}
        </Score>
        <Link to="/">
          <Button>Back to home</Button>
        </Link>
      </Left>
      <GameArea className="App">
        <Snake snakeDots={snakeDots} />
        <Food food={food} />
      </GameArea>
      <Right>
        <Arrows>
          <ArrowTopContainer>
            <ArrowTop src="./medias/arrow.png" />
          </ArrowTopContainer>
          <ArrowBottomLine>
            <ArrowLeft src="./medias/arrow.png" />
            <ArrowBottom src="./medias/arrow.png" />
            <ArrowRight src="./medias/arrow.png" />
          </ArrowBottomLine>
        </Arrows>
      </Right>
    </Container>
  );
};

export default Game;
