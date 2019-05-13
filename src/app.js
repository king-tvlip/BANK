import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
// import configureStore from './store/configureStore';
import Home from './Home';
import Credit from './Credit';
import '../default/reset.scss';

// const store = configureStore();

class App extends PureComponent {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/home" />} />
                    <Route path="/home" component={Home} />
                    <Route path="/credits" component={Credit} />
                </Switch>
            </>
        );
    }
}

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.querySelector('.root')
);
