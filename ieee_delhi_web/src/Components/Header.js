import React from 'react'
import { init } from 'ityped'
import Fade from 'react-reveal/Fade';
import { useState } from "react"
import { useRef, useEffect } from 'react'
import { FaGithub, FaDev, FaVimeoV, FaFacebook, FaLinkedinIn, FaInstagram, FaDiscord } from 'react-icons/fa';
import { RiArrowDownSLine } from 'react-icons/ri'
import "../styles/Header.css"
import MyCarousel from './MyCarousel';
import Mobmenu from "../Components/Mobmenu"
import ReactTypingEffect from 'react-typing-effect';
import Typewriter from "typewriter-effect";
import About from './About';
export default function Header() {
  const textRef = useRef();
  var size_screen;
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Grow", "Develop", "Motivate"],
    });
  }, []);
  useEffect(() => {
    size_screen = window.outerWidth;
  }, [window.outerWidth])
  return (


    <div className="header">
      <div className="logo_for_mob" />

      <div className="mobmenu">
        <Mobmenu />
      </div>
      <div className="type-flex">
        <Fade right duration={3000}>
          <p className="font-mob">
            Welcome to IEEE
  </p>
        </Fade>
        <p className="font-mob1">
          DELHI SECTION
  </p>

        <ReactTypingEffect className="type-mob" speed={100} eraseSpeed={50}
          text={["We", "Inspire", "Motivate", "Develop"]}
        />


      </div>
      <div className="ver_line1">


      </div>

      <div className="icons">
        <FaLinkedinIn className="icon" />
        <FaInstagram className="icon" />
        <FaFacebook className="icon" />

      </div>
      <div className="ver_line2">

      </div>


      <Fade bottom duration={3000}>      <div className="headerbg" />
      </Fade>

      <div className="headersat">

      </div>

      <nav role="navigation" className="primary-navigation">
        <ul>

          <li><a href="#">Home</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Communities</a>
            <ul class="dropdown">
              <li><a href="#">Jammu and kashmir</a></li>
              <li><a href="#">Chandigrah</a></li>
              <li><a href="#">Haryana</a></li>
              <li><a href="#">Himachal Pradesh</a></li>
              <li><a href="#">Rajasthan</a></li>
            </ul>
          </li>
          <li><a href="#">About</a></li>
          <li><a>SSN'21</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <Fade left duration={3000}>
        <p className="head1">IEEE</p>
      </Fade>
      <p className="head2">DELHI SSN</p>

      <p className="head3">WE <span className="htype" ref={textRef}></span></p>
      <RiArrowDownSLine className="down_arrow" />


    </div>

  )


}
