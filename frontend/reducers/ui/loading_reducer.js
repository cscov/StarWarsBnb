import { RECEIVE_SPOT,
         LOAD_SPOT,
         RECEIVE_ALL_SPOTS,
         LOAD_ALL_SPOTS } from '../../actions/spots_actions';
import merge from 'lodash/merge';

const initialState = {
  spotLoading: false,
  allSpotsLoading: false,
};

const LoadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SPOT:
      return merge({}, state, { spotLoading: false });
    case LOAD_SPOT:
      return merge({}, state, { spotLoading: true });
      case RECEIVE_ALL_SPOTS:
        return merge({}, state, { allSpotsLoading: false });
      case LOAD_ALL_SPOTS:
        return  merge({}, state, { allSpotsLoading: true });
    default:
      return state;
  }
};

export default LoadingReducer;
