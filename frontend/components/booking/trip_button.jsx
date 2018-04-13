import React from 'react';
import BookingIndex from './booking_index';
import { Link } from 'react-router-dom';

class TripButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="booking-index-parent">
        <Link to='/trips/1'>Trips</Link>
      </div>
    );
  }
}

export default TripButton;
