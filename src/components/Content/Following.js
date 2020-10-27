import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Card, ListGroup } from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';

import Banner from './Banner';

const INCREMENT = 10;
const FETCHED = 'FETCHED';

const Following = ({ isFetching, followingData, followingMessage }) => {
  const [showNumber, setShowNumber] = useState(INCREMENT);
  const handleLoadMore = () => {
    setShowNumber(showNumber + INCREMENT);
  };

  if (followingMessage === FETCHED) {
    const disabledLoadMore = showNumber >= followingData.length;
    return (
      <div className="d-flex justify-content-center mt-3">
        <Card style={{ width: '20rem' }}>
          <Card.Body>
            <ListGroup>
              <ListGroup.Item className="border-0 d-flex align-items-center">
                <span>
                  {showNumber > followingData.length
                    ? followingData.length
                    : showNumber}
                  /{followingData.length} following
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

              {followingData.slice(0, showNumber).map((following, idx) => (
                <ListGroup.Item
                  className="border-0 d-flex align-items-center"
                  key={idx}
                >
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

  return <Banner isFetching={isFetching} message={followingMessage} />;
};

const mapStateToProps = (state) => ({
  isFetching: state.following.isFetching,
  followingData: state.following.data,
  followingMessage: state.following.message,
});

export default connect(mapStateToProps)(Following);
