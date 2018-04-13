import React from 'react';
import { connect } from 'react-redux';
import SpotShow from './spot_show';
import { fetchSpot, loadUpSpot } from '../../actions/spots_actions';
import { toggleModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => ({
  spot: state.entities.spots[ownProps.match.params.roomId],
  modalOpen: state.ui.modal,
  loading: state.ui.loading.spotLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchSpot: id => dispatch(fetchSpot(id)),
  toggleModal: () => dispatch(toggleModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SpotShow);
