import { RECEIVE_ALL_SPOTS } from '../../actions/spots_actions';

const SpotsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_SPOTS:
      return action.spots;
    default:
      return state;
  }
};

export default SpotsReducer;
