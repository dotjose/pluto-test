import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

export default Sidebar = ({ routes }) => {
  return (
    <div className="app-mainmenu">
      <div className="container">
        <div className="menu-list">
          <BrowserRouter>
            {routes.map((route, index) => (
              <NavLink
                key={index}
                className="list-item"
                to={route.path}
                activeClassName='active'
              >
                <i className={route.icon} />
                <p>{route.name}</p>
              </NavLink>
            ))}
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};
