import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      email_address: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    // console.error(this.props.errors);
    return this.props.errors.map( err => <span>{err}<br /></span>);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    let sessionPath ;
    let sessionLink;
    let altSessionMessage;
    let errors;
    let header;

    if (this.props.formType === 'signup') {
      sessionPath = '/login';
      altSessionMessage = "Already have an account? ";
      sessionLink = "Log in.";
      header = 'Sign Up';
    } else {
      sessionPath = '/signup';
      altSessionMessage = "Don't have an account? ";
      sessionLink = "Sign up.";
      header = 'Log In';
    }
    return (
      <div className="form-content">
        <div className="form-top">
          <span className="modal-close">&times;</span>
          <h3>{header}</h3>
        </div>

        <div className="error-messages">{this.renderErrors()}</div>

        <form onSubmit={this.handleSubmit}>
          <div className="form-fields">
            <input type="text" value={this.state.first_name}
              placeholder="First Name"
              onChange={this.handleInputChange('firstName')} />
            <div className="icon"><FontAwesomeIcon icon={"user"} /></div>
          </div>
            <div className="form-fields">
              <input type="text" value={this.state.email_address}
                placeholder="Email Address"
                onChange={this.handleInputChange('emailAddress')} />
              <div className="icon"><FontAwesomeIcon icon={"envelope"} /></div>
            </div>
            <div className="form-fields">
              <input type="password" value={this.state.password}
                placeholder="Password"
                onChange={this.handleInputChange('password')} />
              <div className="icon"><FontAwesomeIcon icon={"lock"} /></div>
            </div>
            <div><input className="form-submit" type="submit" value={header} /></div>
        </form>
        <div className="alt-session">
          <Link to={sessionPath}>{altSessionMessage}
            <span>{sessionLink}</span></Link>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
