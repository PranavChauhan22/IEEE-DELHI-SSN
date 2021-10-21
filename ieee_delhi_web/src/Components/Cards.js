import React from 'react'

import "../styles/Cards.css"
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Cards=props =>{
 
    return (
        <div>
            <div class="carde">
                <div class="banner">
            <img src={props.data.img} className="img-team-cards"/>
                    
                </div>
                <div class="menu">
                    <div class="opener"><span></span><span></span><span></span></div>
                </div>
                <h2 class="name">{props.data.name}</h2>
                <div class="title">{props.data.des}</div>
                <div class="actions">
                    <div class="follow-info">
                        <div className="foricons">

                            <a href={props.data.lin} target="_blank">
                                
                                <FaInstagram className="icons1"/>
                                </a>
                                <a href={props.data.ig} target="_blank">

                            <FaLinkedinIn className="icons2"/>
                            </a>
                        </div>
                    </div>
                    <div class="follow-btn"><button>{props.data.des}</button></div>
                </div>

                <div class="desc">{props.data.name} is currently serving as  {props.data.des} at IEEE DELHI SECTION</div>
            </div>
        </div>
    )
}

export default Cards
