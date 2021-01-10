import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Game from "./components/game/Game";
//import Music from "./components/Music";
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
//https://www.vectorstock.com/royalty-free-vector/set-seamless-patterns-green-and-dry-grass-in-vector-30385863
//https://www.vectorstock.com/royalty-free-vector/set-seamless-texture-ground-with-small-stones-vector-25825290
//https://fontmeme.com/polices/police-just-kids/
//https://www.storyblocks.com/audio/search/game?media-type=music&search-origin=filters&sort=most_relevant&vbonly=false&categories=kids-and-family
//http://www.jeux.org/jeu/snake-game.html
