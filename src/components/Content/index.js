import React from 'react';
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

import Banner from './Banner';
import User from './User';
import Followers from './Followers';
import Following from './Following';
import NoMatch from './NoMatch';

const Content = () => {
  return (
    <Container style={{ paddingBottom: '100px' }}>
      <Switch>
        <Route exact path="/" component={Banner} />
        <Route path="/user" component={User} />
        <Route path="/followers" component={Followers} />
        <Route path="/following" component={Following} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </Container>
  );
};

export default Content;
