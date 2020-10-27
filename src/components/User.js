import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';

import Banner from './Banner';

const User = ({ isFetching, userData, errMessage }) => {
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
  return <Banner isFetching={isFetching} message={errMessage} />;
};

const mapStateToProps = (state) => ({
  isFetching: state.isFetching,
  userData: state.userData,
  errMessage: state.userErr,
});

export default connect(mapStateToProps)(User);
