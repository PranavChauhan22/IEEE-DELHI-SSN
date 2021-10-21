import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "../demo/index.css";
import 'semantic-ui-css/semantic.min.css'

import ReactDOM from "react-dom";
import { Dropdown, Input } from 'semantic-ui-react'
import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";

import "./CarouselDemo.css";
import Filter from "./Filter";

const CarouselDemo = (props) => {
  if(props.length==0){
    return <h1></h1>
  }
  
  
 
  const responsiveOptions = [
    {
      breakpoint: "1150px",
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: "881px",
      numVisible: 1,
      numScroll: 1
    },
    
  ];



  

  const productTemplate = (product) => {
    return (
      <div className="product-item">
        <div className="product-item-content">
          <div className="p-mb-3">
            <img
              src={`https://drive.google.com/thumbnail?id=${product.Event_Poster}`}
              onError={(e) =>
                (e.target.src =
                  "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
              }
              
            />
          </div>
          <div>
            <h4 className="p-mb-1">{product.Event_Name}</h4>
            <h6 className="p-mt-0 p-mb-3">{product.Student_Branch}</h6>
              <h6 className="p-mt-0 p-mb-3 txte">{product.Event_Description}</h6>
              <div className="tfr">

            <a href={product.Social_Link} target="_blank">
            <Button icon="pi pi-search" className="p-button-rounded p-button-success tfra" />
              </a>

            <div className="car-buttons p-mt-5 tfrb">
            <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary vz" />
            <h6 className="p-mt-0 p-mb-3">{product.Date_of_event}</h6>
            </div>
              </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="align-e">
      <div className="filter">
     {/* <Filter/> */}
     </div>

    <div className="carousel-demo">
      <div className="card-ee">
        <Carousel
          value={props.data}
          numVisible={2}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          className="custom-carousel"
          circular
          autoplayInterval={3000}
          itemTemplate={productTemplate}
          
          />
      </div>
    </div>
          </div>
  );
};

export default CarouselDemo;
