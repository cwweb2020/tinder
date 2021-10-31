import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/favs" component={FavPage} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  );
};

export default Routes;
