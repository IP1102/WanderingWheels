import React, { Component } from "react";
import ReactDOM from "react-dom";
import { useState} from "react";
import "./App.css"
import D1 from "./D1"
import D2 from "./D2"
import D3 from "./D3"
import D4 from "./D4"
import Popup from "./Popup.js"
import Form from "./Form"


class Home extends Component{

  navigateHome = (e) => {
    e.preventDefault();
    const myelement = (
        <div>
        <Form />
        </div>
        );

ReactDOM.render(myelement, document.getElementById('root'));

}

 navigateB1 = (e) => {
    e.preventDefault();
    const myelement = (
        <div>
        <Popup />
        </div>
        );

ReactDOM.render(myelement, document.getElementById('root'));

}

navigateB2 = (e) => {
  e.preventDefault();
  const myelement = (
      <div>
      <Popup />
      </div>
      );

ReactDOM.render(myelement, document.getElementById('root'));

}

navigateB3 = (e) => {
  e.preventDefault();
  const myelement = (
      <div>
      <Popup />
      </div>
      );

ReactDOM.render(myelement, document.getElementById('root'));

}

navigateB4 = (e) => {
  e.preventDefault();
  const myelement = (
      <div>
      <Popup />
      </div>
      );

ReactDOM.render(myelement, document.getElementById('root'));

}


  navigateD1 = (e) => {
    e.preventDefault();
    const myelement = (
        <div>
        <D1 />
        </div>
        );

ReactDOM.render(myelement, document.getElementById('root'));

}

navigateD2 = (e) => {
  e.preventDefault();
  const myelement = (
      <div>
      <D2 />
      </div>
      );

ReactDOM.render(myelement, document.getElementById('root'));

}

navigateD3 = (e) => {
  e.preventDefault();
  const myelement = (
      <div>
      <D3 />
      </div>
      );

ReactDOM.render(myelement, document.getElementById('root'));

}

navigateD4 = (e) => {
  e.preventDefault();
  const myelement = (
      <div>
      <D4 />
      </div>
      );

ReactDOM.render(myelement, document.getElementById('root'));

}
    render() {
    return(
  <div className="home">
    <h1><i><font>Welcome to Car Rental Service!</font></i></h1>
    
    
    <div className="border1">
    <label><b>Hyundai Grand i10</b></label>
    <img src="/images/Car1.jpg" alt="" />
    <div className="b1">
    <button onClick={this.navigateD1.bind(this)}>Details</button>
    <button onClick={this.navigateB1.bind(this)}>Book</button>
    </div>
    </div>
      
    
    <div className="border2">
    <label><b>Toyota Etios</b></label>
    <img src="/images/Car2.jpg" alt="" />
    <div className="b2">
    <button onClick={this.navigateD2.bind(this)}>Details</button>
    <button onClick={this.navigateB2.bind(this)}>Book</button>
    </div>
    </div>

    
    <div className="border3">
    <label><b>Maruti Suzuki Alto</b></label>
    <img src="/images/Car3.jpg" alt="" />
    <div className="b3">
    <button onClick={this.navigateD3.bind(this)}>Details</button>
    <button onClick={this.navigateB3.bind(this)}>Book</button>
    </div>
    </div>

    <div className="border4">
    <label><b>Chevrolet Enjoy</b></label>
    <img src="/images/Car4.jpg" alt="" />
    <div className="b4">
    <button onClick={this.navigateD4.bind(this)}>Details</button>
    <button onClick={this.navigateB4.bind(this)}>Book</button>
    </div>
    </div>

    <div className="b5">
      <button onClick={this.navigateHome.bind(this)}>To Go Back</button>
      </div>
</div>
    );
   }
  }
  
  export default Home;