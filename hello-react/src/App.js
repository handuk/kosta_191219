import React, { Component } from 'react';
import HelloComponent from './components/HelloComponent';
import HelloComponentFunc from './components/HelloComponentFunc';

class App extends Component {
  render() {
    return (
      <div>
        <HelloComponent name="dhan" age={19}/>
        <HelloComponent age={20}/>
        <HelloComponentFunc name="newDhan" age={29}/>
      </div>
    );
  }
}

export default App;