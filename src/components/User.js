import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';

const User = ({ isFetching, userData }) => {
  console.log(isFetching && Object.keys(userData).length === 0);

  if (isFetching) {
    return (
      <div className="d-flex justify-content-center mt-3">
        <h1>Loading...</h1>
      </div>
    );
  } else {
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
          <h1>Search GitHub User by UserId</h1>
        )}
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  isFetching: state.isFetching,
  userData: state.userData,
});

export default connect(mapStateToProps)(User);
