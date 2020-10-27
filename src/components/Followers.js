import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Card, ListGroup } from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';

import Banner from './Banner';

const INCREMENT = 10;
const FETCHED = 'FETCHED';

const Followers = ({ isFetching, followersData, followersMessage }) => {
  const [showNumber, setShowNumber] = useState(INCREMENT);
  const handleLoadMore = () => {
    setShowNumber(showNumber + INCREMENT);
  };

  if (followersMessage === FETCHED) {
    const disabledLoadMore = showNumber >= followersData.length;
    return (
      <div className="d-flex justify-content-center mt-3">
        <Card style={{ width: '20rem' }}>
          <Card.Body>
            <ListGroup>
              <ListGroup.Item className="border-0 d-flex align-items-center">
                <span>
                  {showNumber > followersData.length
                    ? followersData.length
                    : showNumber}
                  / {followersData.length} followers
                </span>
                <Button
                  size="sm"
                  className="ml-auto"
                  variant="outline-primary"
                  disabled={disabledLoadMore}
                  onClick={handleLoadMore}
                >
                  Load more
                </Button>
              </ListGroup.Item>

              {followersData.slice(0, showNumber).map((follower, idx) => (
                <ListGroup.Item
                  className="border-0 d-flex align-items-center"
                  key={idx}
                >
                  <Avatar alt={follower.login} src={follower.avatar_url} />
                  <span className="ml-3 font-weight-bold">
                    {follower.login}
                  </span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    );
  }

  return <Banner isFetching={isFetching} message={followersMessage} />;
};

const mapStateToProps = (state) => ({
  isFetching: state.followers.isFetching,
  followersData: state.followers.data,
  followersMessage: state.followers.message,
});

export default connect(mapStateToProps)(Followers);
