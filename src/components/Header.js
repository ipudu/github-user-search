import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import GitHubIcon from '@material-ui/icons/GitHub';

const Header = ({ userId, setUserId }) => {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserId(searchTerm);
    history.push('/user');
  };

  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="d-flex jusitfy-content-center align-items-center">
            <GitHubIcon className="mr-1" />
            <span className="p-0 m-0">Github User Search</span>
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Item>
              <LinkContainer to="/user">
                <Nav.Link disabled={!userId}>User</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/followers">
                <Nav.Link disabled={!userId}>Followers</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/following">
                <Nav.Link disabled={!userId}>Following</Nav.Link>
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
