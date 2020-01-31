// Required modules and files
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;