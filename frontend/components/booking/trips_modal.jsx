import React from 'react';

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
        <section onClick={this.handleClose}>Here is the trip modal</section>
      );
    } else {
      return (
        <a id="view-trips" href="#" onClick={this.handleOpen}>Trips</a>
      );
    }
  }
}

export default TripsModal;
