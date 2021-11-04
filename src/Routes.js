import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import FavPage from './components/favs/FavPage';
import LoginPage from './components/login/LoginPage';  

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/favs" component={FavPage} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  );
};

export default Routes;
