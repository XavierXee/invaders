import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Main } from './components/Main/Main.js';
import './App.css';

class App extends Component {
        render() {
            return (
                <div className="App">
                    <div className="App-content">
                        <BrowserRouter>
                            <Switch>
                                <Route exact path="/" component={Main}/>
                            </Switch>
                        </BrowserRouter>
                    </div>
                </div>
            );
    }
}
export default App;
