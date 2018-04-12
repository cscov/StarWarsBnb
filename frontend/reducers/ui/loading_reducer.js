import { RECEIVE_SPOT, LOAD_SPOT } from '../../actions/spots_actions';
import merge from 'lodash/merge';

const initialState = {
  spotLoading: false
};

const LoadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SPOT:
      return merge({}, state, { spotLoading: false });
    case LOAD_SPOT:
      return merge({}, state, { spotLoading: true });
    default:
      return state;
  }
};

export default LoadingReducer;
