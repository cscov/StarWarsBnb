import React from 'react';
import BookingIndexItem from './booking_index_item';

class BookingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.fetchBookings(this.props.currentUser.id);
      console.log(this.props);
    }
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    const {trips, onClose} = this.props;
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
        <div className="background" onClick={this.props.onClose}></div>
      </React.Fragment>
    );
  }
}

export default BookingIndex;
