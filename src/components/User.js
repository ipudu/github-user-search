import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';

const User = ({ isFetching, userData, errMessage }) => {
  if (!!errMessage) {
    return (
      <div className="d-flex justify-content-center mt-3">
        <h1>{errMessage}</h1>
      </div>
    );
  }

  if (isFetching) {
    return (
      <div className="d-flex justify-content-center mt-3">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center mt-3">
      {Object.keys(userData).length !== 0 ? (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={userData.avatar_url} />
          <Card.Body>
            <Card.Title>{userData.name}</Card.Title>
            <Card.Text>{userData.bio}</Card.Text>
            <Card.Text>{userData.followers} followers</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <h1>Search Github User by UserId</h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isFetching: state.isFetching,
  userData: state.userData,
  errMessage: state.userErr,
});

export default connect(mapStateToProps)(User);
