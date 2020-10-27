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

  if (message === 'CAN NOT FIND USER INFO') {
    return (
      <Alert variant="danger" className="mt-5">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>User info can not be found!</p>
      </Alert>
    );
  }
  return (
    <Alert variant="success" className="mt-5">
      <Alert.Heading>Hey, nice to see you!</Alert.Heading>
      <hr />
      <p>You can search github user info by loginId (e.g., ipudu).</p>

      <p>
        <strong>/User</strong> shows basic user info.
      </p>
      <p>
        <strong>/followers</strong> shows user's folowers info.
      </p>
      <p>
        <strong>/following</strong> shows user's following info.
      </p>
    </Alert>
  );
};

export default Banner;
