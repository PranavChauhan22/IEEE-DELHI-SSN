import React from 'react'
import "../styles/About.css"
import Fade from 'react-reveal/Fade';
import {FaAward} from 'react-icons/fa'
import {RiCommunityLine} from 'react-icons/ri'
import {HiUserGroup} from 'react-icons/hi'
import CountUp from 'react-countup'
import Home from './Home'
function About() {
    return (
<div className="align-about" id="About">

        <div className="about-head">
           
            <div className="about"/>
            <div className="all-wrap">
<Fade bottom duration={3000}>

            <div className="about-bg"/>
</Fade>
<Fade right duration={3000}>

            <p className="about-text">
            Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
</Fade>
          <div className="btn">Learn More</div>
            <div className="counter">
                <span className="award">
                    <FaAward className="icon"/>
                    <div className="icon-text">
                        <p className="text">Awards Won by IEEE Delhi Section</p>
                        <p className="logic-counter"><CountUp end={10} duration={5}/></p>
                    </div>
                </span>
          
                <span className="sb">
                    <RiCommunityLine className="icon"/>
                    <div className="icon-text">
                        <p className="text">Student Branches Monitored by Us</p>
                        <p className="logic-counter"><CountUp end={100} duration={5}/></p>
                    </div>
                </span>
                <span className="sb">
                    <HiUserGroup className="icon"/>
                    <div className="icon-text">
                        <p className="text">Subsections Involved</p>
                        <p className="logic-counter"><CountUp end={5} duration={5}/></p>
                    </div>
                </span>
            </div>
            </div>
        </div>
     

</div>
    )
}

export default About
