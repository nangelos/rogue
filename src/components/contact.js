import React, { Component } from 'react';
import { addEmail } from '../reducers/email';
import { connect } from 'react-redux';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      sent: false,
      contactName: '',
      contactPhone: '',
      contactMessage: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { contactName, contactPhone, contactMessage } = this.state;
    const { createMessage } = this.props;
    createMessage({ contactName, contactPhone, contactMessage });
    this.setState({ sent: true });
  };

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        {this.state.sent === false ? (
          <div>
            <h2 className="page-header">Want to learn more?</h2>
            <h4>Message us here or email us at info@fixiteddie.com</h4>
            <form>
              <div id="contact-form">
                <div className="line" id="contact-email">
                  <input
                    type="text"
                    className="contact-input"
                    name="contactName"
                    placeholder="YOUR EMAIL ADDRESS*"
                    required={true}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="line" id="contact-phone">
                  <input
                    type="text"
                    className="contact-input"
                    name="contactPhone"
                    placeholder="YOUR PHONE NUMBER*"
                    required={true}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="line" id="message">
                  <textarea
                    name="contactMessage"
                    className="notes-box"
                    placeholder="YOUR MESSAGE*"
                    required={true}
                    onChange={this.handleChange}
                  />
                </div>
                <br />
                <div id="buttonHolder">
                  <input
                    type="submit"
                    value="SUBMIT"
                    id="submit-btn"
                    onClick={this.handleSubmit}
                  />
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <h1 style={{ marginTop: '225px' }}>Thank you for contacting us!</h1>
            <p style={{ marginBottom: '225px' }}>
              We will respond as soon as we are able...
            </p>
          </div>
        )}
      </div>
    );
  }
}

const mapState = state => ({ state });

const mapDispatch = dispatch => ({
  createMessage: message => dispatch(addEmail(message)),
});

export default connect(
  mapState,
  mapDispatch
)(Contact);
