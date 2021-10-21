import React from 'react'
import "../styles/Gallery.css"
import Fade from 'react-reveal/Fade';
function Posts() {
    return (
        <div>
<div className="section">
  
  <div className="grid">
  <Fade left duration={3000}>
    <div className="item">
      <div className="item__details">
        jelly-o brownie sweet
      </div>
    </div>
      </Fade> 
      <Fade right duration={3000}>
    <div className="item item--large">
      <div className="item__details">
        Muffin jelly gingerbread 
      </div>
    </div>
    </Fade>
    <Fade left duration={3000}>
    <div className="item item--medium">
      <div className="item__details">
        sesame snaps chocolate
      </div>
    </div>
    </Fade>
    <Fade right duration={3000}>
    <div className="item item--large">
      <div className="item__details">
        Oat cake
      </div>
    </div>
    </Fade>
    <Fade up duration={3000}>
    <div className="item item--medium">
      <div className="item__details">
        Dragée pudding brownie
      </div>
    </div>
    </Fade>
    <Fade down duration={3000}>
    <div className="item item--small">
      <div className="item__details">
        Oat cake
      </div>
    </div>
    </Fade>

  </div>
</div>
        </div>
    )
}

export default Posts
