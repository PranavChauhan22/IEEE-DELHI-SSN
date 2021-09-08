import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import Cards from"./Cards"
import "../styles/MyCarousel.css"

class MyCarousel extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle"
    };
  }

 

  render() {
    return (
    

      <div style={MyCarousel.CONTAINER_STYLE}>
        <div className="ssn_title">

        </div>
        <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          
         
        </ReactCardCarousel>
       
      </div>

    );
  }
}

export default MyCarousel;
