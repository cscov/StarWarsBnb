import React from 'react';
import { connect } from 'react-redux';
import { fetchAllSpots, fetchSpot } from '../../actions/spots_actions';
import SpotsIndex from './spots_index';

const mapStateToProps = state => ({
  spots: Object.values(state.entities.spots)
});

const mapDispatchToProps = dispatch => ({
  fetchAllSpots: () => dispatch(fetchAllSpots()),
  fetchSpot: (id) => dispatch(fetchSpot(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SpotsIndex);
