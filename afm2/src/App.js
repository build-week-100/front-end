import React from "react";
import "./App.css";
import Register from "./component/Register";
import Login from "./component/Login";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute";
import ItemList from "./component/ItemList";
import Home from "./component/Home";

const App = () => {
  return (
    <Router>
      <div className="App">
        <p>African Marketplace</p>
        <Route path="/" component={Login}></Route>
        <Switch>
          <PrivateRoute exact path="/protected" component={Home} />
          {/* <PrivateRoute path ='/Home' component ={Home} /> */}

          <Register />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
