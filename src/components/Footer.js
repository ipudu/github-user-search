import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container className="fixed-bottom bg-light p-3 text-center" fluid>
      <h4>
        Made with ❤️ by{' '}
        <a href="https://github.com/ipudu/github-user-search">Pu Du</a>
      </h4>
    </Container>
  );
};

export default Footer;
