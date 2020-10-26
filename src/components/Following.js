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
        <Card style={{ width: '20rem' }}>
          <Card.Body>
            <ListGroup>
              <ListGroup.Item className="border-0 d-flex">
                <Card.Text>
                  {followingData.length} / {followingData.length} following
                </Card.Text>
                <Button size="sm" className="ml-auto" variant="outline-primary">
                  Load more
                </Button>
              </ListGroup.Item>

              {followingData.length > 0
                ? followingData.map((following, idx) => (
                    <ListGroup.Item
                      className="border-0 d-flex align-items-center"
                      key={idx}
                    >
                      <Avatar
                        alt={following.login}
                        src={following.avatar_url}
                      />
                      <span className="ml-3 font-weight-bold">
                        {following.login}
                      </span>
                    </ListGroup.Item>
                  ))
                : null}
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  isFetchingFollowing: state.isFetchingFollowing,
  followingData: state.followingData,
});

export default connect(mapStateToProps)(Following);
