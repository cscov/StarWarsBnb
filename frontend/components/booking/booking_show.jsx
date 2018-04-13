import React from 'react';
import { Link } from 'react-router-dom';

class BookingShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.trip.id !== nextProps.match.params.tripId) {
      this.fetchBooking(nextProps.match.params.tripId);
    }
  }

  componentDidMount() {
    this.fetchBooking(this.props.userId, this.props.match.params.tripId);
  }

  render() {

    const {trip, currentUser} = this.props;
    return (
      <React.Fragment>
        <div className="header">
          <h1>You're going to {trip.spot.planet}!</h1>
          <span className="code">Reservation code: {trip.reservation_code}</span>
          <span className="edit-rez">Make a change to the reservation</span>
        </div>
        <div className="trip-details">
          <span className="trip-label">Check In</span>
          <div className="check-in border">
            <span className="date">{trip.parseArrivalMonth} {trip.parseArrivalDay}</span>
            <span className="time">{trip.parseTimeIn}PM</span>
        </div>
        <div className="check-out border">
          <span className="trip-label">Check Out</span>
          <span className="date">{trip.parseDepartMonth} {trip.parseDepartDay}</span>
          <span className="time">{trip.parseTimeOut}AM</span>
        </div>
        <div className="smart-lock border">
          <span className="trip-label">Smart lock instructions</span>
        </div>
        <div className="address-section border">
          <p className="address">{trip.spot.address}</p>
        </div>
        <div className="rules-section border">
          <span className="trip-label">House Rules</span>
          <p className="house-rules">{trip.spot.houseRules}</p>
        </div>
        <div className="billing-section border">
          <span className="trip-label">Billing</span>
          <span className="stay-length">{trip.totalDays} nights total</span>
          <span className="cost">${trip.totalCost}</span>
        </div>
        </div>
        <div className="host-details">
          <img src={trip.spot.host.avatar} />
          <span className="host-name">Your host, {trip.spot.host.firstName}</span>
          <span className="phone">{trip.spot.host.phoneNumber}</span>
        </div>
        <div className="spot-details border">
          <img src={trip.spot.spotFirstPhoto} />
          <p className="directions">{trip.spot.directions}</p>
        </div>
        <div className="house">
          <span className="trip-label">House Manual</span>
          <p className="manual">{trip.spot.houseManual}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default BookingShow;
