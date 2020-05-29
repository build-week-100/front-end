import React from 'react';

import './App.css';
import Login from './component/Login'
import Register from './component/Register'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import PrivateRoute from './component/PrivateRoute'
import ItemList from './component/ItemList';
import Home from './component/Home'
import Header from './component/Header'
import DashBoard from './component/DashBoard';
import AddItem from './component/AddItem';
import EditItems from './component/EditItems';
import ItemPage from './component/ItemPage';






const App =() => {
  return (
    <Router>
    <div className="App">
     
     <Route exact path="/" component={Login}></Route>
     <Route exact path="/Register" component={Register} />
     <Switch>
     <PrivateRoute  exact path='/protected' component={Home}/>
     {/* <PrivateRoute path ='/Home' component ={Home} /> */}
     <PrivateRoute   path='/dashboard' component={DashBoard}/>
     <PrivateRoute   path='/header' component={Header}/>
     <PrivateRoute   path='/addItem' component={AddItem}/>
     <PrivateRoute   path='/editItem' component={EditItems}/>
     
     

</Switch>
    </div>
    </Router>
  );
}

export default App;
