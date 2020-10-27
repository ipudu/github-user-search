import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Card, ListGroup } from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';

import Banner from './Banner';

const Following = ({ isFetching, followingData, errMessage }) => {
  const [showNumber, setShowNumber] = useState(10);
  const handleLoadMore = () => {
    setShowNumber(showNumber + 10);
  };

  if (errMessage) {
    return <Banner message={errMessage} />;
  }

  if (isFetching) {
    return <Banner isFetching={isFetching} />;
  }

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
                / {followingData.length} following
              </span>
              <Button
                size="sm"
                className="ml-auto"
                variant="outline-primary"
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
                <span className="ml-3 font-weight-bold">{following.login}</span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isFetching: state.isFetchingFollowing,
  followingData: state.followingData,
  errMessage: state.followingErr,
});

export default connect(mapStateToProps)(Following);
