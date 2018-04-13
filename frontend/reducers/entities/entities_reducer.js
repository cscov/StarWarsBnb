import { combineReducers } from 'redux';
import SpotsReducer from './spots_reducer';
import BookingReducer from './booking_reducer';

export default combineReducers({
  spots: SpotsReducer,
  bookings: BookingReducer,
});
