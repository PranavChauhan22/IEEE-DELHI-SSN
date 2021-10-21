import React from 'react'
import "../styles/MediaCard.css"
import { IoMdArrowDroprightCircle, IoMdArrowDropleftCircle } from 'react-icons/io';
import img from "../Images/Poster.jpeg"
import {Link} from 'react-router-dom'
import {useState} from "react"
import { Carousel } from 'primereact/carousel';

const MediaCard=(props)=> {
const [state, setstate] = useState(0);
console.log(state);
console.log(props.data);
if(props.data.length<=state){
  return(
   <h1></h1>
  )
}else{
  return (
    <div className="spacer">
   
      
      	<div class="blog-card spring-fever" style={{ 
      backgroundImage: `url('https://drive.google.com/thumbnail?id=${props.data[state].Event_Poster}')` 
    }}>
  <div class="title-content">
    <h3><a href="#">{props.data[state].Event_Name}</a></h3>
    <div class="intro"> <a>{props.data[state].Student_Branch}</a> </div>
  </div>
  <div class="card-info">
    {props.data[state].Event_Description}
    <a href={props.data[state].Social_Link} target="_blank">Visit<span class="licon icon-arr icon-black"></span></a>
  </div>
  
  <div class="utility-info">
    <ul class="utility-list">
      <li><span class="licon icon-dat"></span>{props.data[state].Date_of_event}</li>
    </ul>
  </div>
  <div class="gradient-overlay"></div>
  <div class="color-overlay"></div>
</div>
<div className="for_arrows">
        <IoMdArrowDropleftCircle className="arrow1" onClick={()=>setstate(state==0?0:state-1)}/>
        <IoMdArrowDroprightCircle className="arrow2" onClick={()=>setstate(state==props.data.length-1?props.data.length-1:state+1)}/>
      </div>


    </div>
  )
}
}
export default MediaCard
