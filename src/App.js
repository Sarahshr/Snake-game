import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Game from "./components/game/Game";

const App = () => {
  const [alive, setAlive] = useState("start");
  const [score, setScore] = useState(0);

  return (
    <div className="container">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Home
              alive={alive}
              setAlive={setAlive}
              setScore={setScore}
              score={score}
            />
          )}
        />
        <Route path="/game" render={() => <Game />} />
      </Switch>
    </div>
  );
};

export default App;
