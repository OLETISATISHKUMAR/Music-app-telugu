import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Music from "./ComponetsOfMusicApp/DashBoard/Music";
import Presentaion from "./ComponetsOfMusicApp/Home/Presentaion";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Presentaion} />
          <Route path="/music" component={Music} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
