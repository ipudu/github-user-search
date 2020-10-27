import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';

import Banner from './Banner';

const User = ({ isFetching, userData, userMessage }) => {
  if (Object.keys(userData).length > 0) {
    return (
      <div className="d-flex justify-content-center mt-3">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={userData.avatar_url} />
          <Card.Body>
            <Card.Title>{userData.name}</Card.Title>
            <Card.Text>{userData.bio}</Card.Text>
            <Card.Text>{userData.followers} followers</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }

  return <Banner isFetching={isFetching} message={userMessage} />;
};

const mapStateToProps = (state) => ({
  isFetching: state.user.isFetching,
  userData: state.user.data,
  userMessage: state.user.message,
});

export default connect(mapStateToProps)(User);
