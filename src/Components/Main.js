import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Campaigns from './Campaigns';
import ManageUsers from './ManageUsers';
import ProcessOrders from './ProcessOrders';
import Reports from './Reports';
import FirmOnboarding from './FirmOnboarding';


const Main = () => (
    <div className="app-container__content">
    <Switch>
        <Route exact path='/' component={Campaigns} />
        <Route path='/manageusers' component={ManageUsers} />
        <Route path='/processorders' component={ProcessOrders} />
        <Route path='/reports' component={Reports} />
        <Route path='/firmonboarding' component={FirmOnboarding} />
    </Switch>
    </div>
)


export default Main;