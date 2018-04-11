import * as SpotsAPIUtil from '../util/spots_api_util';

export const RECEIVE_ALL_SPOTS = 'RECEIVE_ALL_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';

 const receiveAllSpots = spots => ({
  type: RECEIVE_ALL_SPOTS,
  spots
});

 const receiveSpot = payload => ({
  type: RECEIVE_SPOT,
  spot: payload.spot
});

export const fetchAllSpots = () => dispatch => (
  SpotsAPIUtil.fetchAllSpots().then( spots => dispatch(receiveAllSpots(spots)))
);

export const fetchSpot = id => dispatch => (
  SpotsAPIUtil.fetchSpot(id).then( spot => dispatch(receiveSpot(spot)))
);
