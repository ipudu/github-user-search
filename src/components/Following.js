import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';

const Following = () => {
  return (
    <div className="d-flex justify-content-center mt-3">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <ListGroup>
            <ListGroup.Item className="border-0 d-flex">
              <Card.Text>0/0 following</Card.Text>
              <Button size="sm" className="ml-auto" variant="outline-primary">
                Load more
              </Button>
            </ListGroup.Item>

            <ListGroup.Item className="border-0 d-flex align-items-center">
              <Avatar
                alt="Remy Sharp"
                src="https://avatars1.githubusercontent.com/u/7396?v=4"
              />
              <span className="ml-3 font-weight-bold">mitsuhiko</span>
            </ListGroup.Item>
            <ListGroup.Item className="border-0 d-flex align-items-center">
              <Avatar
                alt="Remy Sharp"
                src="https://avatars1.githubusercontent.com/u/7396?v=4"
              />
              <span className="ml-3 font-weight-bold">mitsuhiko</span>
            </ListGroup.Item>
            <ListGroup.Item className="border-0 d-flex align-items-center">
              <Avatar
                alt="Remy Sharp"
                src="https://avatars1.githubusercontent.com/u/7396?v=4"
              />
              <span className="ml-3 font-weight-bold">mitsuhiko</span>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Following;
