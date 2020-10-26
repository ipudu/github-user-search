import React from 'react';
import { connect } from 'react-redux';
import { Button, Card, ListGroup } from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';

const Following = ({ isFetchingFollowing, followingData }) => {
  if (isFetchingFollowing) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="d-flex justify-content-center mt-3">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <ListGroup>
              <ListGroup.Item className="border-0 d-flex">
                <Card.Text>{followingData.length} following</Card.Text>
                <Button size="sm" className="ml-auto" variant="outline-primary">
                  Load more
                </Button>
              </ListGroup.Item>

              {followingData.map((following) => (
                <ListGroup.Item className="border-0 d-flex align-items-center">
                  <Avatar alt={following.login} src={following.avatar_url} />
                  <span className="ml-3 font-weight-bold">
                    {following.login}
                  </span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  isFetchingFollowing: state.isFetching,
  followingData: state.followingData,
});

export default connect(mapStateToProps)(Following);
