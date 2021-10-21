import React from 'react'
import "../styles/Mobmenu.css"
function Mobmenu() {
    return (
        <div>
 
  <div className="area"></div><nav className="main-menu">
            <ul>
                <li>
                    <a href="#Home">
                        <i className="fa fa-home fa-2x"></i>
                        <span className="nav-text">
                            Home
                        </span>
                    </a>
                  
                </li>
                <li className="has-subnav">
                    <a href="#Gallery">
                        <i className="fa fa-laptop fa-2x"></i>
                        <span className="nav-text">
                            Gallery
                        </span>
                    </a>
                    
                </li>
              
               
                
                <li>
                    <a href="#About">
                        <i className="fa fa-font fa-2x"></i>
                        <span className="nav-text">
                           About
                        </span>
                    </a>
                </li>
                
                <li>
                   <a href="#SSN21">
                        <i className="fa fa-map-marker fa-2x"></i>
                        <span className="nav-text">
                            SSN'21
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#Contact">
                       <i className="fa fa-info fa-2x"></i>
                        <span className="nav-text">
                            Contact
                        </span>
                    </a>
                </li>
            </ul>

           
        </nav>
</div>
    )
}

export default Mobmenu
