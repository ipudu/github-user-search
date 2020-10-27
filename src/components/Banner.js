import React from 'react';
import { Alert, Spinner } from 'react-bootstrap';

const Loading = () => (
  <div className="d-flex flex-column align-items-center mt-5">
    <div>
      <Spinner variant="primary" animation="border" role="status" />
    </div>

    <p>Loading...</p>
  </div>
);

const Banner = ({ isFetching = false, message = '' }) => {
  if (isFetching) {
    return <Loading />;
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
