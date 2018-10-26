import React, { Component } from 'react';
import {GlobalStyle, IconfontStyle} from './indexSty.js'
import Header from './components/header/indexHead'

class App extends Component {
  render() {
    return (
        <div>
          <GlobalStyle/>
            <IconfontStyle/>
          <Header/>
        </div>
    );
  }
}

export default App;
