import React from 'react'
import { Switch, Route } from 'react-router-dom'

 
import Repository from '../pages/Repository';
import Dassboard from '../pages/Dashboard'; 
const Routes: React.FC = () => (
    <Switch>
        <Route path='/'exact component={Dassboard} /> 
        <Route path='/:repository+' component={Repository} />
    </Switch>

)

export default Routes