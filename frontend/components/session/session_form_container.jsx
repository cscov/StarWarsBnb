import React from 'react';
import SessionForm from './session_form';

class SessionFormContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SessionForm processForm={this.props.processForm}
      clearErrors={this.props.clearErrors}/>
    );
  }
}

export default SessionFormContainer;
