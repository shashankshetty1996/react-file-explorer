import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { MainContainer } from './container';

const Routes = ({ childProps }) => {
  const props = {
    ...childProps,
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MainContainer} props={props} />
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
