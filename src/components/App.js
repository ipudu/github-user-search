import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { fetchUser, fetchFollowing, fetchFollowers } from '../actions';

const App = ({ fetchAll }) => {
  const [userId, setUserId] = useState('');

  useEffect(() => {
    if (userId) {
      fetchAll(userId);
    }
  }, [userId, fetchAll]);

  return (
    <div>
      <Header userId={userId} setUserId={setUserId} />
      <Content />
      <Footer />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchAll: (userId) => {
    dispatch(fetchFollowing(userId));
    dispatch(fetchUser(userId));
    dispatch(fetchFollowers(userId));
  },
});

export default connect(null, mapDispatchToProps)(App);
