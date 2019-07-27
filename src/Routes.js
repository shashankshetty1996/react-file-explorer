import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { MainLayout } from './layout';

const Routes = ({ childProps }) => {
  const props = {
    ...childProps,
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MainLayout} props={props} />
      </Switch>
    </BrowserRouter>
  );
};

Routes.propTypes = {
  childProps: PropTypes.object,
};

Routes.defaultProps = {
  childProps: {},
};

export default Routes;
