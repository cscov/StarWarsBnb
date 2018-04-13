import React from 'react';
import BookingIndex from './booking_index';

class TripButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false};
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    const {props} = this.props;
    console.log(`button props are: ${props}`);
  }

   viewBooking() {
     this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    return (
      <div className="booking-index-parent">
        <div onClick={this.toggleModal}>Trips</div>
        <BookingIndex show={this.state.isOpen} onClose={this.toggleModal}
          trips={this.props.trips} />
      </div>
    );
  }
}

export default TripButton;
