import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';

import Layout from './components/layout';
import Home from './components/pages/home';
import Reports from './components/pages/reports';
import Budget_Policy from './components/pages/budget_policy';
import EditProfile from './components/pages/edit_profile';



export default class App extends Component {

    constructor(props){
        super();
    }
    
    render(){
        return (
            <div>
                <Layout />
                <div className="app-wrapper">
                    {this.props.children}
                </div>
            </div>
        )
    };
};

render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/reports" component={Reports}/>
            <Route path="/budget_policy" component={Budget_Policy}/>
            <Route path="/edit-profile" component={EditProfile}/>
            
            
            
        </Route>
    </Router>, document.getElementById('app')
);