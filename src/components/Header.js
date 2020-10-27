import React, { useState } from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import GitHubIcon from '@material-ui/icons/GitHub';

const Header = ({ setUserId }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserId(searchTerm);
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button className="ml-1" type="submit" disabled={!searchTerm}>
              submit
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
