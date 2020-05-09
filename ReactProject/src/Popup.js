import React, { Component } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal"
import Form from "./Form"
import "./App.css"
import Home from "./Home"


class Popup extends Component{

  navigateForm = (e) => {
    e.preventDefault();
    const myelement = (
        <div>
        <Form />
        </div>
        );

ReactDOM.render(myelement, document.getElementById('root'));

}


  render() {
  return(
<div className="popup">
  <Home />
<Modal className="modal" isOpen={true}>
    <h1><i>Your Booking has been confirmed!</i></h1>
    <p>Your Booking No. is: CNF2346</p>
    <div>
      <button onClick={this.navigateForm.bind(this)}>Continue</button>
    </div>
</Modal>
</div>
  );
 }
}

export default Popup;
