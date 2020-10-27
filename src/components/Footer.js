import React from 'react';
import { Container } from 'react-bootstrap';
import GithubCorner from 'react-github-corner';

const Footer = () => {
  return (
    <Container className="fixed-bottom bg-light p-3 text-center" fluid>
      <GithubCorner
        href="https://github.com/ipudu/github-user-search"
        bannerColor="#64CEAA"
      />
      <h4>
        Made with ❤️ by <a href="https://github.com/ipudu">Pu Du</a>
      </h4>
    </Container>
  );
};

export default Footer;
