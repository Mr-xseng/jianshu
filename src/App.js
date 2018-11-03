import React, { Component } from 'react';
import {GlobalStyle, IconfontStyle} from './indexSty.js'
import store from './store'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './components/header/indexHead'
import Home from './pages/home/homeIndex'
import DetailWriter from './pages/detail/detail-writer/writerIndex'

class App extends Component {
  render() {
    return (
        <div>
            <GlobalStyle/>
            <IconfontStyle/>
            <Provider store={store}>
                <div>
                    <Header/>
                    <BrowserRouter>
                        <div>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/detail/writer" component={DetailWriter}/>
                        </div>
                    </BrowserRouter>
                </div>
            </Provider>
        </div>
    );
  }
}

export default App;
