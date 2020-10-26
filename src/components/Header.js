import React from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submited');
  };
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Github User Search</Navbar.Brand>
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
          />
          <Button className="rounded-0">submit</Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default Header;
