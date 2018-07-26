import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBar = () => (
    <div className="adp-sidebar">
		<ul>
		    <NavLink activeClassName="active" exact to='/'><li>Campaigns</li></NavLink>
		    <NavLink activeClassName="active" to='/manageusers'><li>Manage Users</li></NavLink>
		    <NavLink activeClassName="active" to='/processorders'><li>Pocess Orders</li></NavLink>
		    <NavLink activeClassName="active" to='/reports'><li>Reports</li></NavLink>
		    <NavLink activeClassName="active" to='/firmonboarding'><li>Firm Onboarding</li></NavLink>
		</ul>
    </div>
)

export default SideBar;
