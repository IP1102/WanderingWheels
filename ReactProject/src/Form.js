import React, { Component } from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import "./App.css";


const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const dateRegex = RegExp(
  /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/
  );

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      bf: null,
      bt: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        bf: "",
        bt: ""
         }
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    if (formValid(this.state)) 
    {
        const myelement = (
        <div>
        <Home />
        </div>
        );

ReactDOM.render(myelement, document.getElementById('root'));

    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;

      case "bf":
        formErrors.bf = dateRegex.test(value)
        ? ""
        : "invalid date";
        break;

      case "bt":
        formErrors.bt = dateRegex.test(value)
        ? ""
        : "invalid date";
        break;
    
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1><i>Welcome to Wandering Wheels!</i></h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>

            <div clasName="bf">
              <label htmlFor="bf">Booking From</label>
              <input
              placeholder="DD/MM/YYYY"
              type="text"
              name="bf"
              noValidate
              onChange={this.handleChange}
              />
              {formErrors.bf.length > 0 && (
                <span className="errorMessage">{formErrors.bf}</span>
              )}
              </div>

              <div clasName="bt">
              <label htmlFor="bt">Booking Till</label>
              <input
              placeholder="DD/MM/YYYY"
              type="text"
              name="bt"
              noValidate
              onChange={this.handleChange}
              />
              {formErrors.bt.length > 0 && (
                <span className="errorMessage">{formErrors.bt}</span>
              )}
              </div>

          
            <div className="book">
              <button onClick={this.handleSubmit.bind(this)}>Book a Car</button>
            </div>
          </form>
        </div>
      </div>
    );
              }
            }
export default Form; 