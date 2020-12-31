import React from 'react';
import HomePage from '../Components/HomePage/HomePage';
import {Route} from 'react-router-dom'
import CardDetails from '../Components/CardDetails.jsx/CardDetails';

const Routes = (props) => {
    return (
        <div>
            <Route path="/" exact component={HomePage} />
            <Route path="/:name" exact {...props} component={CardDetails} />
        </div>
    );
}

export default Routes;


