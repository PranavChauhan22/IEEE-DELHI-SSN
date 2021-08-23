import React from 'react'
import "../styles/Testimonials.css"
import { BiCircle } from 'react-icons/bi';
import { BsCircleFill } from 'react-icons/bs';
import { IoMdArrowDroprightCircle, IoMdArrowDropleftCircle } from 'react-icons/io';
import {useState} from "react"
function Testimonials() {
  const [state, setstate] = useState(0)
  var wo;
  if (state==0) {
    wo="one"
  }
  else if (state==1) {
    wo="two"
  }
  else if (state==2) {
    wo="three"
  }
  else if (state==3) {
    wo="four"
  }
    return (
        <div>
            <div className="underline"/>
            
            <div className="card_test">
               
                <div className="img"/>
                <div className="words">
                
                {wo}
                </div>
            </div>
            <div className="circles">
                {state==0?<BsCircleFill className="icons_circle1" />:<BiCircle  className="icons_circle" onClick={()=>setstate(0)}/>}
                {state==1?<BsCircleFill className="icons_circle1" />:<BiCircle  className="icons_circle" onClick={()=>setstate(1)}/>}
                {state==2?<BsCircleFill className="icons_circle1" />:<BiCircle  className="icons_circle" onClick={()=>setstate(2)}/>}
                {state==3?<BsCircleFill className="icons_circle1" />:<BiCircle  className="icons_circle" onClick={()=>setstate(3)}/>}
            
            </div>
            <div className="arrows">
                <IoMdArrowDropleftCircle className="arrow_icons" onClick={()=>setstate(state==0?3:(state-1)%4)}/>
                <IoMdArrowDroprightCircle className="arrow_icons" onClick={()=>setstate((state+1)%4)}/>
            </div>
        </div>
    )
}

export default Testimonials
