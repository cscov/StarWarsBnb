import * as SpotsAPIUtil from '../util/spots_api_util';

export const RECEIVE_ALL_SPOTS = 'RECEIVE_ALL_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';
export const LOAD_SPOT = 'LOAD_SPOT';

 const receiveAllSpots = spots => ({
  type: RECEIVE_ALL_SPOTS,
  spots
});

 const receiveSpot = payload => ({
  type: RECEIVE_SPOT,
  spot: payload.spot
});

const loadUpSpot = () => ({
  type: LOAD_SPOT
});

export const fetchAllSpots = () => dispatch => (
  SpotsAPIUtil.fetchAllSpots().then( spots => dispatch(receiveAllSpots(spots)))
);

export const fetchSpot = (id) => (dispatch) => {
  dispatch(loadUpSpot());
  return SpotsAPIUtil.fetchSpot(id).then( spot => { dispatch(receiveSpot(spot));
    return spot;
  });
};
