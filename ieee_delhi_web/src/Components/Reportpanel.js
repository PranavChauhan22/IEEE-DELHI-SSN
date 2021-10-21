import React from 'react'
import "../styles/Reportpanel.css"
const Reportpanel=()=> {
    return (
        <div className="report">
            <div className="iconwrapper">

<p className="logout_text"><a className="atag" href="/Report">Report</a></p>
<p className="logout_text"><a className="atag" href="/Event">Event</a></p>

</div>
           <iframe allowTransparency="true" className="report-css" width="100%" id="contactform123" name="contactform123" marginwidth="0" marginheight="0" frameborder="0" src="https://form.123formbuilder.com/my-contact-form-5991889.html"><p>Your browser does not support iframes. The contact form cannot be displayed. Please use another contact method (phone, fax etc)</p></iframe>
        </div>
    )
}

export default Reportpanel
