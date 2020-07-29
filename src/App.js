import "./App.css";
import About from "./routes/About";
import Detail from "./routes/Detail";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import { Navigation } from "./components/Navigation";
import React from "react";
// import {Home as sth} from "..."

function App() {
  return (
    <HashRouter>
      {/* <Navigation /> */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}
//두개나눠쓸거 하나로쓰는것 <div />도 가능한듯
export default App;
