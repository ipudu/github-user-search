import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { fetchUser, fetchFollowing } from '../actions';

const Header = ({ userData, fetchUser }) => {
  const [userId, setUserId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUser(userId);
    fetchFollowing(userId);
  };

  const handleClick = () => console.log(userData);

  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand onClick={handleClick}>Github User Search</Navbar.Brand>
        </LinkContainer>
        <Nav className="mr-auto">
          <Nav.Item>
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
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
            className="rounded-0"
            type="text"
            placeholder="Search..."
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <Button className="rounded-0">submit</Button>
        </Form>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
