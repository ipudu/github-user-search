import React from 'react';
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import User from './User';
import Following from './Following';

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/">
            <User />
          </Route>
          <Route path="/following">
            <Following />
          </Route>
        </Switch>
      </Container>
    </>
  );
};

export default App;
