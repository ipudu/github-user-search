import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import GitHubIcon from '@material-ui/icons/GitHub';

import { fetchUser, fetchFollowing, fetchFollowers } from '../actions';

const Header = ({ fetchUser, fetchFollowing, fetchFollowers }) => {
  const [userId, setUserId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId) {
      fetchUser(userId);
      fetchFollowing(userId);
      fetchFollowers(userId);
    }
  };

  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="d-flex">
            <GitHubIcon className="mx-1" />
            Github User Search
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto" defaultActiveKey="/">
            <Nav.Item>
              <LinkContainer exact to="/">
                <Nav.Link>User</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/followers">
                <Nav.Link>Followers</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/following">
                <Nav.Link>Following</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
          <Form inline className="ml-auto" onSubmit={(e) => handleSubmit(e)}>
            <Form.Control
              type="text"
              placeholder="Search..."
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <Button className="ml-1" type="submit" disabled={!userId}>
              submit
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  isFetching: state.isFetching,
  userData: state.userData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchFollowing: (userId) => dispatch(fetchFollowing(userId)),
  fetchFollowers: (userId) => dispatch(fetchFollowers(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
