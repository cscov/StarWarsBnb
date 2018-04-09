import React from 'react';
import SessionForm from './session_form';

class SessionFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: this.props.modalOpen};
  }

  toggleModal() {
    this.setState({modalOpen: !this.state });
  }

  render() {
    return (
      <SessionForm modalOpen={this.state.modalOpen}
      onClose={this.toggleModal} processForm={this.props.processForm}
      clearErrors={this.props.clearErrors}/>
    );
  }
}

export default SessionFormContainer;
