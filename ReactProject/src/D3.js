import React, { Component } from "react";
import "./App.css"
import Home from "./Home"
import ReactDOM from "react-dom";


class D3 extends Component{
    navigateHome = (e) => {
        e.preventDefault();
        const myelement = (
            <div>
            <Home />
            </div>
            );
    
    ReactDOM.render(myelement, document.getElementById('root'));

    }


    render() {
  return(
<div className="d3">
<h1><i>Car Details</i></h1>

<div className="block3">
    <img src="/images/Car3.jpg" alt="" />
        <br />
        <br />
        <br />
        <label><b>Vehicle No.: FD15432 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </b></label>
        <br />
        <label><b>Fuel Type : Petrol &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
        <br />
        <label><b>Rent Per Day : Rs.420 </b></label>
        <br />
        <br />
        <label><b><u>Car Details :</u></b></label>
        <br />
        <br />
        <label><i>Maruti Suzuki Alto comes with warranty options upto 5 years.Customer can choose any warranty options as his driving requirements at the time of new vehicle delivery.From a strong body structure to standar dual Airbags and ABS with EBD, maimum care has been taken to integrate the a plethora of safety features.</i></label>
        <br />
        <br />
        <div className="b8">
  <button onClick={this.navigateHome.bind(this)}>Go Back</button>
  </div>
</div>
</div>
  );
 }
}

export default D3;