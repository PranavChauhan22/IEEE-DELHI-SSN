import React from 'react'
import "../styles/Contact.css"
import {FaFacebook, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io'
import {ImPhone } from 'react-icons/im';
function Contact() {
    return (
        <div className="foot">
            <form action="https://submit-form.com/1rylS3aY" className="footer">
            <input
    type="hidden"
    name="_redirect"
    
    value="https://www.youtube.com/"
  />
<h1 className="footer-text">Get In Touch</h1>
  <input type="text" id="name" name="name" placeholder="Name" required="" className="form-name" />

  <input type="email" id="email" name="email" placeholder="Email" required="" className="form-email"/>

  <textarea
    id="message"
    name="message"
    placeholder="Message"
    required=""
    className="form-mssg"
  />
  <button class="btn-lrg submit-btn" type="submit" className="form-btn">Send</button>
  <div className="icon-wrap-1">
<FaFacebook className="fb"/>
<FaInstagram className="ig"/>
<FaLinkedinIn className="ln"/>
  </div>
  <div className="footertext">
    <div className="footer_text">About</div>
    <div className="footers_text">IEEE DELHI</div>
    <div className="footers_text">Team</div>
    <div className="footers_text">Events</div>
    <div className="footers_text">Gallery</div>
  </div>
  <div className="footertext2">

      <span className="phn-icon">
      <ImPhone className="icon-phn"/>+91xxxxxxxxxx
      <div className="piyush_ssr">Piyush Kumar Sahoo</div>
      </span>
      <span className="phn-icon">
      <ImPhone className="icon-phn"/>+91xxxxxxxxxx
      <div className="gagan_ssr">Gagan Singh</div>
      </span>
    </div>
    <div className="arrow-footer">
      <span className="back-to-top">
Back to top
      <IoIosArrowUp className="up-arrow"/>
      </span>
    </div>

</form>

        </div>
    )
}

export default Contact


