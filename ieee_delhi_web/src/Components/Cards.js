import React from 'react'

import "../styles/Cards.css"
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Cards() {
    return (
        <div>
            <div class="card">
    <div class="banner"><svg viewBox="0 0 100 100">
        </svg>
        <div className="img_icon"/>
</div>
    <div class="menu">
        <div class="opener"><span></span><span></span><span></span></div>
    </div>
    <h2 class="name">Morgan Sweeney</h2>
    <div class="title">Ant Collector</div>
    <div class="actions">
        <div class="follow-info">
        <div className="foricons">

<FaInstagram className="icons1" />
<FaLinkedinIn className="icons2" />
</div>
        </div>
        <div class="follow-btn"><button>Follow</button></div>
    </div>

    <div class="desc">Morgan has collected ants since they were six years old and now has many dozen ants but none in their pants.</div>
</div>
        </div>
    )
}

export default Cards
