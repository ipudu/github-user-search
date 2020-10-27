import React from 'react';
import { Alert } from 'react-bootstrap';

const Banner = ({ isFetching = false, message = '' }) => {
  if (isFetching) {
    return (
      <Alert variant="info" className="mt-5">
        <Alert.Heading>Loading....</Alert.Heading>
      </Alert>
    );
  }

  if (message === 'NOT_FETCHED') {
    return (
      <Alert variant="success" className="mt-5">
        <Alert.Heading>Hey, nice to see you!</Alert.Heading>
        <p>You can search by userID</p>
      </Alert>
    );
  }
  return (
    <Alert variant="danger" className="mt-5">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>User info can not be found!</p>
    </Alert>
  );
};

export default Banner;
