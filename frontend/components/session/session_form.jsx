import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email_address: "",
      password: ""
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

  render() {
    return (
      <div>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.email_address}
            onChange={this.handleInputChange('email_address')} />
          <input type="password" value={this.state.password}
            onChange={this.handleInputChange('password')} />
          <input type="submit" value={this.props.formType} />
        </form>

      </div>
    );
  }
}

export default SessionForm;
