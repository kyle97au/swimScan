import React from 'react';
import { NavLink } from 'react-router-dom';

import MobileToggle from '../MobileToggle/MobileToggle';
import NavigationItems from '../NavigationItems/NavigationItems';

import './MainNavigation.css';

const mainNavigation = props => (
  <nav className="main-nav">
    <MobileToggle onOpen={props.onOpenMobileNav} />
      <NavLink to="/user">
      <h1 className="logo">Users</h1>
      </NavLink>
    <div className="spacer2" />
      <NavLink to="/event">
      <h1 className="logo">Event</h1>
      </NavLink>

    <div className="spacer" />
    <NavLink to="/">
      <h2 className="currentUser">{ props.userName }</h2>
    </NavLink>
    <ul className="main-nav__items"> 
      <NavigationItems isAuth={props.isAuth} onLogout={props.onLogout} />
    </ul>
  </nav>
);

export default mainNavigation;
