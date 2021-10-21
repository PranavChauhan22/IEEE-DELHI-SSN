import React from 'react'
import "../styles/ReportCard.css"
import {useState} from 'react'

const ReportCard=(props)=> {
    const [state, setstate] = useState(0)
  console.log(props.data[0])
  if(props.data.length<=state){
    return(
     <h1></h1>
    )
  }
   else{ return (
        <div className="rep-card">
            <h1 className="rep-text-sb">{props.data[state].SB_Name}</h1>
            <h3 className="rep-text">Report</h3>
            <p className="rep-desc">
            {props.data[state].Report_Description}
            </p>
            <div className="flex-wrap">

            <div className="button"><a target="_blank" className="link" href={props.data[state].Links}>Additional Links</a></div>
            <div className="flex">

            <div className="button" onClick={(state==0)?0:(()=>setstate(state-1))}>Prev</div>
            <div className="button" onClick={(state==props.data.length-1?props.data.length-1:(()=>setstate(state+1)))}>Next</div>
            </div>
            </div>
        </div>
    )
   }
}

export default ReportCard
