import React, { Component } from 'react';
import {GlobalStyle, IconfontStyle} from './indexSty.js'
import store from './components/header/headerStore/index'
import {Provider} from 'react-redux'
import Header from './components/header/indexHead'

class App extends Component {
  render() {
    return (
        <div>
            <GlobalStyle/>
            <IconfontStyle/>
            <Provider store={store}>
                <Header/>
            </Provider>
        </div>
    );
  }
}

export default App;
