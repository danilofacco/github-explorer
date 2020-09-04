import React from 'react'
import { Switch, Route } from 'react-router-dom'

 
import Repository from '../pages/Repository';
import Home from '../pages/Home'; 
const Routes: React.FC = () => (
    <Switch>
        <Route path='/'exact component={Home} /> 
        <Route path='/:repository+' component={Repository} />
    </Switch>

)

export default Routes