import React from 'react';
import { connect } from 'react-redux';
import SpotShow from './spot_show';
import { fetchSpot } from '../../actions/spots_actions';


const mapStateToProps = (state, ownProps) => ({
  spot: state.entities.spots[ownProps.match.params.roomId]
});

const mapDispatchToProps = dispatch => {
  return {fetchSpot: (id) => dispatch(fetchSpot(id))};
};

export default connect(mapStateToProps, mapDispatchToProps)(SpotShow);
