import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Home, About } from 'pages';
import Menu from 'components/Menu';

function App() {
  return (
    <div>
      <Menu/>
      <Route exact path="/" component={Home}/>
      {/* <Route path="/about" component={About}/> */}
      <Route path="/about/:name?" component={About}/>
    </div>
  );
}

export default App;
