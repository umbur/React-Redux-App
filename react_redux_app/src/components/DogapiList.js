import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getData } from '../actions';

import Dogapi from './Dogapi';

const DogapiList = props => {
    console.log('props from DogapiList', props)
  return (
    <>
      <h1>Welcome to the random Dog API!</h1>
      <button onClick={props.getData}> GET DOG </button>
        {/* {{props.isLoading ? (
          <Loader type="tailspin" color="#00BFFF" height="15" width="100" />
        ) : (
          'Get DOG API Data'
        )} */}
      <Dogapi key={props.dogapi.message} getdog={props.dogapi.message} />
    </>
  );
};

const mapStateToProps = state => {
    console.log('state from DogapiList', state)
  return {
    isLoading: state.isLoading,
    dogapi: state.dogapi
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(DogapiList);
