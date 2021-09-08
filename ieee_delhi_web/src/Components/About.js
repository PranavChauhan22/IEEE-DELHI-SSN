import React from 'react'
import "../styles/About.css"
import {CgCommunity} from 'react-icons/cg'
import {HiUserGroup} from 'react-icons/hi'
import {RiGroupFill} from 'react-icons/ri'
import CountUp from 'react-countup';
import {FaAward} from 'react-icons/fa'
function About() {
    return (
        <div className="about">
            <div className="about_bg"/>
            <div className="about_bg_img"/>


            <div className="about-flex">

            <p className="about-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className="icons-grid">
            <span className="text"> <CgCommunity className="sb"/><CountUp end={100} duration={5}/> SB's</span>
            <span className="text"><HiUserGroup className="subs"/><CountUp end={5} duration={5}/> Subsections</span>
            <span className="text"> <RiGroupFill className="team"/><CountUp end={25} duration={5}/> Team Members</span>
            <span className="text"> <FaAward className="award"/><CountUp end={10} duration={5}/> Awards</span>


            </div>
            </div>
            </div>
     
    )
}

export default About
