import React from 'react';
import { Card } from 'react-bootstrap';

const User = () => {
  return (
    <div className="d-flex justify-content-center mt-3">
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src="https://avatars2.githubusercontent.com/u/4185532?v=4"
        />
        <Card.Body>
          <Card.Title>Pu Du</Card.Title>
          <Card.Text>
            Chemist, coder, gamer, geek, nerd, and Bitcoin Believer.
          </Card.Text>
          <Card.Text>22 followers</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default User;
