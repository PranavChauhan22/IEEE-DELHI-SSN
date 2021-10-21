import React from 'react'
import { HiOutlineLogout } from 'react-icons/hi';
import "../styles/Dashboard.css"
import Gallery from './Gallery';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'
const Dashboard=({handleLogout})=> {
   
    
    return (
        <div className="upper">
            <div className="iconwrapper">

            <p className="logout_text"><a className="atag" href="/Report">Report</a></p>
            <p className="logout_text"><a className="atag" href="/Event">Event</a></p>
            <p className="logout_text" onClick={handleLogout}>Logout</p>
            <HiOutlineLogout className="logout_icon" onClick={handleLogout}/>
            </div>
       
      <iframe allowTransparency="true" className="css-form" width="100%" id="contactform123" name="contactform123" marginwidth="0" marginheight="0" frameborder="0" src="https://form.123formbuilder.com/my-contact-form-5990259.html"><p>Your browser does not support iframes. The contact form cannot be displayed. Please use another contact method (phone, fax etc)</p></iframe>
        </div>
    )
}

export default Dashboard
