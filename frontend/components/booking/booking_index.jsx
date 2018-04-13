import React from 'react';
import BookingIndexItem from './booking_index_item';

class BookingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBookings();
  }

  render() {
    const trips = this.props;
    trips.map( (trip, idx) => {
      return (
        <BookingIndexItem key={`trip-${idx}`} trip={trip}/>
      );
    });
    return (
      <React.Fragment>
        <div className="trip-modal">
          <div className="top-bar">
            <span>Trips</span>
          </div>
          <ul className="trip-list">
            {trips}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default BookingIndex;
