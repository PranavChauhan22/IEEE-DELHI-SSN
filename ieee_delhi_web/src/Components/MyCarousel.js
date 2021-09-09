import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import Cards from"./Cards"
import "../styles/MyCarousel.css"

class MyCarousel extends Component {

  

  render() {
    return (
  <div className="align-cards">

<div className="team">

      
      <div className="ssn_title"/>
        <div className="img-team"/>

          <div className="cards">
      <div className="container_style">
        <ReactCardCarousel autoplay={false} autoplay_speed={2500}>

          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          
         
        </ReactCardCarousel>
          </div>
</div>
       
      </div>
  </div>

    );
  }
}

export default MyCarousel;
