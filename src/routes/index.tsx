import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';
import Dasboard from '../pages/Dashboard';

const Routes: React.FC = () => (
    <Switch>
        <Route path='/'exact component={Dasboard} />
        <Route path='/repository/:repository+' component={Repository} />
    </Switch>

)

export default Routes