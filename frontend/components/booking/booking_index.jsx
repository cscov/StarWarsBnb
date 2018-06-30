import React from 'react';
import BookingIndexItem from './booking_index_item';
import {faCaretUp} from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


class BookingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.fetchBookings(this.props.currentUser.id);
    }
  }

  render() {
    const {trips} = this.props;
    const userTrips = trips.map( (trip, idx) => {
      console.log(trip);
      return (
        <BookingIndexItem key={`trip-${idx}`} trip={trip}/>
      );
    });
    return (
      <React.Fragment>
        <div className="trip-modal">
          <div className="top-bar">
            <span id="trip-caret" className="fa-2x theme-border-color"><FontAwesomeIcon icon={faCaretUp} /></span>
            <span className="title">Trips</span>
          </div>
          <ul className="trip-list">
            {userTrips}
          </ul>
        </div>
        <div className="background"></div>
      </React.Fragment>
    );
  }
}

export default BookingIndex;
