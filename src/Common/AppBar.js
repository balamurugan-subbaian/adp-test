import React from 'react';
import {users} from './Data';
import logoUrl from '../Images/adp logo.png';
 /*To do
 avatar as one component
 app bar as 1 component
 */

const AppBar = () => {
    return ( <div>
    {users.map((user,index) => <div className="adp-appbar" key={index}>
        <div className="adp-appbar__left">
            <img src={logoUrl} alt=""/>
        </div>
        <div className="adp-appbar__right">
            <img className="adp-appbar__right-avatar" src={user.avatar} alt=""/>
            <div className="adp-appbar__right__avatar-content">
                <p className="adp-appbar__right__avatar__content-name">{user.name}</p>
                <p className="adp-appbar__right__avatar__content-role">{user.role}</p>
            </div>
            <div className="adp-appbar__right-dropdown"></div>
        </div>
    </div>
    )
    }
    </div>
    )
}

export default AppBar;