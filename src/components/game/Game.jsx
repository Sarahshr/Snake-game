import React, { useEffect, useState } from "react";

import Snake from "../Snake";
import Food from "../Food";
import {
  Container,
  Right,
  Score,
  Apple,
  Span,
  Left,
  Arrows,
  Div,
  ArrowTop,
  GameArea,
} from "./styleGame";

const getRandomCoordinates = () => {
  let min = 2;
  let max = 96;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y];
};

const Game = ({ setAlive, setScore, score }) => {
  const [food, setFood] = useState(getRandomCoordinates);
  const [snakeDots, setSnakeDots] = useState([
    [0, 0],
    [2, 0],
    [4, 0],
  ]);
  const [direction, setDirection] = useState("right");
  const [speed, setSpeed] = useState(200);

  useEffect(() => {
    document.onkeydown = onKeyDown;
    checkBordersArea();
    checkIfCollapsed();
    handleSpeed();
    checkIfEat();
    const move = setInterval(() => {
      moveSnake();
    }, speed);
    return () => clearInterval(move);
  });

  const onKeyDown = e => {
    switch (e.code) {
      case "ArrowUp":
        direction === "down" ? setDirection("down") : setDirection("up");
        break;
      case "ArrowDown":
        direction === "up" ? setDirection("up") : setDirection("down");
        break;
      case "ArrowLeft":
        direction === "right" ? setDirection("right") : setDirection("left");
        break;
      case "ArrowRight":
        direction === "left" ? setDirection("left") : setDirection("right");
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
      default:
        setDirection("right");
    }
    dots.push(head);
    dots.shift();
    setSnakeDots(dots);
  };

  const gameOver = () => {
    setAlive("game over");
    setSnakeDots([
      [0, 0],
      [2, 0],
      [4, 0],
    ]);
    setFood(getRandomCoordinates);
    setDirection("right");
  };

  const checkBordersArea = () => {
    let head = snakeDots[snakeDots.length - 1];
    if (head[0] === 100 || head[0] < 0 || head[1] < 0 || head[1] === 100) {
      gameOver();
    }
  };

  const checkIfEat = () => {
    let head = snakeDots[snakeDots.length - 1];
    if (head[0] === food[0] && head[1] === food[1]) {
      setFood(getRandomCoordinates());
      let snake = [...snakeDots];
      snake.unshift([]);
      setSnakeDots(snake);
      setScore(score => score + 1);
    }
  };

  const handleSpeed = () => {
    switch (score) {
      case 5:
        setSpeed(150);
        break;
      case 10:
        setSpeed(100);
        break;
      case 15:
        setSpeed(50);
        break;
    }
  };

  const checkIfCollapsed = () => {
    let snake = [...snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(
      dot => dot[0] === head[0] && dot[1] === head[1] && gameOver()
    );
  };

  return (
    <Container>
      <Left>
        <Score>
          <Apple></Apple>
          <Span> x </Span>
          {score}
        </Score>
      </Left>
      <GameArea className="App">
        <Snake snakeDots={snakeDots} />
        <Food food={food} />
      </GameArea>
      <Right>
        <Span>Use arrows keyboard to move</Span>
        <Arrows>
          <ArrowTop>
            <i className="fas fa-arrow-alt-square-up"></i>
          </ArrowTop>
          <Div>
            <i className="fas fa-arrow-alt-square-left"></i>
            <i className="fas fa-arrow-alt-square-down"></i>
            <i className="fas fa-arrow-alt-square-right"></i>
          </Div>
        </Arrows>
      </Right>
    </Container>
  );
};

export default Game;
