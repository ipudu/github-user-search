import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Banner from './Banner';

const User = ({ isFetching, userData, userMessage }) => {
  if (isFetching || userMessage !== 'FETCHED') {
    return <Banner isFetching={isFetching} message={userMessage} />;
  }

  return (
    <div className="d-flex justify-content-center mt-3">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={userData.avatar_url} />
        <Card.Body>
          <Card.Title>
            <Card.Link
              href={`https://github.com/${userData.login}`}
              target="_blank"
            >
              {userData.name}
            </Card.Link>
          </Card.Title>
          <Card.Text>{userData.bio}</Card.Text>
          <Card.Text>
            <LinkContainer to="/followers">
              <Card.Link>{userData.followers} followers</Card.Link>
            </LinkContainer>

            <LinkContainer to="/following">
              <Card.Link>{userData.following} following</Card.Link>
            </LinkContainer>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isFetching: state.user.isFetching,
  userData: state.user.data,
  userMessage: state.user.message,
});

export default connect(mapStateToProps)(User);
