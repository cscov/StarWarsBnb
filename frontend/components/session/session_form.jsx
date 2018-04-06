import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    console.error(this.props.errors);
    return this.props.errors.map( err => <span>{err}</span>);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    let sessionPath ;
    let sessionLink;
    let errors;
    let header;

    if (this.props.formType === 'signup') {
      sessionPath = '/login';
      sessionLink = "Already have an account? Log in.";
      header = 'Sign Up';
    } else {
      sessionPath = '/signup';
      sessionLink = "Don't have an account? Sign up.";
      header = 'Log In';
    }
    return (
      <div>
        <h3>{header}</h3>
        <Link to={sessionPath}>{sessionLink}</Link>

        <div>{this.renderErrors()}</div>

        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.email_address}
            placeholder="Email Address"
            onChange={this.handleInputChange('email_address')} />
          <input type="password" value={this.state.password}
            placeholder="Password"
            onChange={this.handleInputChange('password')} />
          <input type="submit" value={header} />
        </form>

      </div>
    );
  }
}

export default withRouter(SessionForm);
