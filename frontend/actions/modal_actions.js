
export const OPEN_TRIPS_MODAL = 'OPEN_TRIPS_MODAL';
export const CLOSE_TRIPS_MODAL = 'CLOSE_TRIPS_MODAL';

export const receiveTripsModal = () => ({
  type: OPEN_TRIPS_MODAL,
});

export const removeTripsModal = () => ({
  type: CLOSE_TRIPS_MODAL,
});

export const fetchTripsModal = () => dispatch => (
  dispatch(receiveTripsModal())
);

export const closeTripsModal = () => dispatch => (
  dispatch(removeTripsModal())
);
