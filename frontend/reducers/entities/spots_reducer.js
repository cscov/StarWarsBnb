import { RECEIVE_ALL_SPOTS, RECEIVE_SPOT } from '../../actions/spots_actions';
import merge from 'lodash/merge';

const SpotsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_SPOTS:
      return action.spots;
    case RECEIVE_SPOT:
    console.log(action.spot.id);
      const newState = { [action.spot.id]: action.spot };
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default SpotsReducer;
