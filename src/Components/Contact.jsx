import React from "react";
import { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTextValid: true,
      isEmailValid: true
    };
  }

  REGEX = {
    defaultFormat: /^[a-zA-Z0-9.-\/@\s]+$/,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi
  };

  ERROR_MESSAGE = {
    defaultFormat:
      "Oups, something was wrong. Try to use only characters such: letters and numbers.",
    email: "The email provided does not match the standart format."
  };

  checkEntry = event => {
    var typeEntry = event.target.getAttribute("type");
    let entry = event.target.value;
    if (entry.length > 0) {
      switch (typeEntry) {
        case "text":
          var isValid = this.REGEX.defaultFormat.test(entry);
          this.setState({
            isTextValid: isValid
          });
          break;
        case "email":
          var isValid = this.REGEX.email.test(entry);
          this.setState({
            isEmailValid: isValid
          });
          break;
      }
    }
  };
  deleteErrorMessage = event => {
    var typeEntry = event.target.getAttribute("type");
    let entry = event.target.value;
    switch (typeEntry) {
      case "text":
        var isValid = this.REGEX.defaultFormat.test(entry);
        this.setState({
          isTextValid: true
        });
        break;
      case "email":
        var isValid = this.REGEX.email.test(entry);
        this.setState({
          isEmailValid: true
        });
        break;
    }
  };
  render() {
    return (
      <section id={"Contact"} className={"contact"}>
        <div className={"title_contact"}>
          {" "}
          <h1> Contact us</h1>
          <p>Get a first touch with us. And we do the rest.</p>
        </div>
        <div className={"contact_details"}>
          <form
            id={"form"}
            action={"#"}
            method={"post"}
            name={"registrationForm"}
            encType={"multipart/form-data"}
            netlify="true"
          >
            <div className={"user_name"}>
              <input
                type={"text"}
                name={"firstName"}
                placeholder={"First name"}
                onBlur={this.checkEntry}
                onFocus={this.deleteErrorMessage}
              />
              <p
                className={"error_message"}
                style={
                  this.state.isTextValid
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                {this.ERROR_MESSAGE.defaultFormat}
              </p>
            </div>
            <div className={"email"}>
              <input
                type={"email"}
                id={"email"}
                className={"input_inscription"}
                name={"email"}
                placeholder={"Type your email"}
                required
                onBlur={this.checkEntry}
                onFocus={this.deleteErrorMessage}
              />
              <p
                className={"error_message"}
                style={
                  this.state.isEmailValid
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                {this.ERROR_MESSAGE.email}
              </p>
            </div>
            <div className={"message_from_user"}>
              <textarea
                className={"text_area"}
                onBlur={this.checkEntry}
              ></textarea>
            </div>
            <div>
              <input className="submit_button" value="Send" type="submit" />{" "}
            </div>
          </form>
          <div className={"address_hours"}>
            <div>
              <h3 style={{ fontFamily: "Oswald, sans-serif", color: "grey" }}>
                Our place
              </h3>
              <div>
                <p> 59 Benton road b93**</p>
                <p> Birmingham</p>
                <p>01-393939393</p>
              </div>
            </div>
            <div>
              <h3 style={{ fontFamily: "Oswald, sans-serif", color: "grey" }}>
                Opening time
              </h3>
              <div>
                <p> Lunch: 11am - 14pm </p>
                <p> Diner: 6pm - 11pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;
