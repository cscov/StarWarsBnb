import React from 'react';
import { withRouter, Link, Redirect, Route } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      emailAddress: "",
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
    return this.props.errors.map( (err, idx) =>
    <span key={`err_${idx + 1}`}>{err}<br /></span>);
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
    let form;

    if (!this.props.modalOpen) {
      return null;
    }

    if (this.props.formType === 'signup') {
      sessionPath = '/login';
      altSessionMessage = "Already have an account? ";
      sessionLink = "Log in.";
      header = 'Sign Up';
      form = (
        <React.Fragment>
          <div className="session-form">
            <div className="form-content">
              <div className="form-top">
                <Link to="/"><span className="modal-close">&times;</span></Link>
                <h3>{header}</h3>
              </div>

              <div className="error-messages">{this.renderErrors()}</div>

              <form onSubmit={this.handleSubmit}>
                <div className="form-fields">
                  <input type="text" value={this.state.firstName}
                    placeholder="First Name"
                    onChange={this.handleInputChange('firstName')} />
                  <div className="icon"><FontAwesomeIcon icon={"user"} /></div>
                </div>
                <div className="form-fields">
                  <input type="text" value={this.state.emailAddress}
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
                <div className="form-button"><input className="form-submit" type="submit" value={header} /></div>
              </form>
              <div className="alt-session">
                <Link to={sessionPath}>{altSessionMessage}
                  <span>{sessionLink}</span></Link>
                </div>
              </div>
              <Link to="/"><div className="lightbox"></div></Link>
          </div>
        </React.Fragment>
      );
    } else {
      sessionPath = '/signup';
      altSessionMessage = "Don't have an account? ";
      sessionLink = "Sign up.";
      header = 'Log In';
      form = (
        <React.Fragment>
          <div className="session-form">
            <div className="form-content">
              <div className="form-top">
                <Link to="/"><span className="modal-close">&times;</span></Link>
                <h3>{header}</h3>
              </div>

              <div className="error-messages">{this.renderErrors()}</div>

              <form onSubmit={this.handleSubmit}>
                <div className="form-fields">
                  <input type="text" value={this.state.emailAddress}
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
                <div className="form-button"><input className="form-submit" type="submit" value={header} /></div>
              </form>
              <div className="alt-session">
                <Link to={sessionPath}>{altSessionMessage}
                  <span>{sessionLink}</span></Link>
                </div>
              </div>
              <Link to="/"><div className="lightbox"></div></Link>
          </div>
      </React.Fragment>
    );
    }
    return form;
  }
}

export default withRouter(SessionForm);
