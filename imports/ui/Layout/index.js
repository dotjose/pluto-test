import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import Routes from '../routes';

const switchRoutes = (
  <BrowserRouter>
    {Routes.map((route, key) => {
      return <Route path={route.path} component={route.component} key={key} />;
    })}
    <Redirect from="/" to="/tasks" />
  </BrowserRouter>
);

const Layout = () => {
  return (
    <>
      <Sidebar routes={Routes} />
      <div className="page">
        <Header />
        {switchRoutes}
      </div>
    </>
  );
};

export default Layout;
