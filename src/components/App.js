import React from 'react';
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import User from './User';
import Followers from './Followers';
import Following from './Following';
import NoMatch from './NoMatch';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Container style={{ paddingBottom: '100px' }}>
        <Switch>
          <Route exact path="/">
            <User />
          </Route>
          <Route path="/followers">
            <Followers />
          </Route>
          <Route path="/following">
            <Following />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
