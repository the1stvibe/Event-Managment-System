import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from 'react-router-dom';

import AuthContext from '../../context/auth-context';
import './MainNavigation.css';

const mainNavigation = props => (
  <AppBar >
        <Toolbar>
  <AuthContext.Consumer>
    {context => {
      return (
        <header className="main-navigation">
          <div className="main-navigation__logo">
          
          </div>
          <nav className="main-navigation__items">
            <ul>
              <li>
                <p id="eve">Eve</p>
              </li>
              {!context.token && (
                <li>
                  <NavLink to="/auth">Access</NavLink>
                </li>
              )}
              <li>
                <NavLink to="/events">Events</NavLink>
              </li>
              {context.token && (
                <React.Fragment>
                <li>
                  <NavLink to="/bookings">Bookings</NavLink>
                </li>
                <li>
                  <NavLink to="/chatbot">SpecialOffers</NavLink>
                </li>
                
                <li>
                  <button onClick={context.logout}>Logout</button>
                </li>
                </React.Fragment>
              )}
            </ul>
          </nav>
        </header>
      );
    }}
  </AuthContext.Consumer>
  </Toolbar>
  </AppBar>
);

export default mainNavigation;
