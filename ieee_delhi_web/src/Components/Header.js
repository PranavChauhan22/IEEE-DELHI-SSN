import React from 'react'
import { init } from 'ityped'
import { useRef, useEffect } from 'react'
import {  FaGithub, FaDev, FaVimeoV,FaFacebook, FaLinkedinIn, FaInstagram, FaDiscord } from 'react-icons/fa';
import {RiArrowDownSLine} from 'react-icons/ri'
import "../styles/Header.css"
function Header() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Grow","Develop","Motivate"],
    });
  }, []);
    return (

        <div className="header">
          <div className="ver_line1">
            
          </div>
          <div className="icons">
            <FaLinkedinIn className="icon"/>
            <FaInstagram className="icon"/>
            <FaFacebook className="icon"/>

          </div>
          <div className="ver_line2">

          </div>
<div className="headerbg">

</div>
<div className="headersat">

</div>

<nav role="navigation" className="primary-navigation">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Work</a>
      <ul class="dropdown">
        <li><a href="#">Web Development</a></li>
        <li><a href="#">Web Design</a></li>
        <li><a href="#">Illustration</a></li>
        <li><a href="#">Iconography</a></li>
      </ul>
    </li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
<p className="head1">IEEE</p>
<p className="head2">DELHI SSN</p>

<p className="head3">WE <span className="htype" ref={textRef}></span></p>
<RiArrowDownSLine className="down_arrow"/>
        </div>
    )
}

export default Header
