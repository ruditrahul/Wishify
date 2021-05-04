
import './App.css';
import Home from "./Home";
import Lists from "./Lists";
import Create from "./Create";
import {WishProvider} from "./wishContent";

import { useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <WishProvider>
        <Router>
      <div className="App">
      <Switch> 
      <Route path="/" exact component={Home}/>
      <Route path="/create" component={Create}/>
      <Route path="/lists" component={Lists}/>
      </Switch>
    </div>
    </Router>
    </WishProvider>
    
    
  );
}

export default App;
