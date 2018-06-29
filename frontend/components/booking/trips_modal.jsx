import React from 'react';
import BookingIndexContainer from './booking_index_container';

class TripsModal extends React.Component {
  constructor() {
    super();

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleClose() {
    this.props.closeModal();
  }

  handleOpen() {
    this.props.fetchModal();
  }

  render() {
    if (this.props.modalOpen) {
      return (
        <section className="modal-container" onClick={this.handleClose}>
          <a id="view-trips" href="#">Trips</a>
          <BookingIndexContainer />
        </section>
      );
    } else {
      return (
        <a id="view-trips" href="#" onClick={this.handleOpen}>Trips</a>
      );
    }
  }
}

export default TripsModal;
