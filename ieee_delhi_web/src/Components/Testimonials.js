import React, { useState, useRef, useEffect } from "react";
import { TweenLite, Power3 } from "gsap";
import { BiCircle } from "react-icons/bi";
import { BsCircleFill } from "react-icons/bs";

import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/io";
import Fade from "react-reveal/Fade";
import leftArrow from "../assets/arrow-left.svg";
import rightArrow from "../assets/arrow-right.svg";

import "reset-css";
import "../styles/Testimonials.scss";
import img1 from "../Images/Rachana_ma_am.jpg";
import img2 from "../Images/Rashmi Agarwal.jpeg";
import img3 from "../Images/Archit goswami.jpeg";
import img4 from "../Images/Mahesh_jangid.jpeg";
import img5 from "../Images/Meenu Khurana_Chandigarsh_sub-sec.jpeg";
// var picselector=0;

function Testimonials() {
  const [picselector, setpicselector] = useState(0);
  const testimonials = [
    {
      name: "Julia Cameron",
      title: "Creative Director, VISA",
      image: picselector == 0 ? img1 : img4,
      quote:
        "It's all good. I was amazed at the quality of the Design. We've seen amazing results already.",
    },
    {
      name: "Mark Jacobs",
      title: "Tech Lead, Google",
      image: picselector == 0 ? img2 : img5,
      quote:
        "The rebranding has really helped our business. Definitely worth the investment.",
    },
    {
      name: "Lisa Bearings",
      title: "Brand Coordinator, Facebook",
      image: img3,
      quote:
        "The service was excellent. Absolutely wonderful! A complete redesign did it for us.",
    },
  ];
  let imageList = useRef(null);
  let testimonialList = useRef(null);
  const imageWidth = 340;

  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
  });

  useEffect(() => {
    TweenLite.to(testimonialList.children[0], 0, {
      opacity: 1,
    });
  }, []);

  //Image transition
  const slideLeft = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: -imageWidth * multiplied,
      ease: Power3.easeOut,
    });
  };

  const slideRight = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: imageWidth * multiplied,
      ease: Power3.easeOut,
    });
  };

  const scale = (index, duration) => {
    TweenLite.from(imageList.children[index], duration, {
      scale: 1.2,
      ease: Power3.easeOut,
    });
  };

  //Content transition

  const fadeOut = (index, duration) => {
    TweenLite.to(testimonialList.children[index], duration, {
      opacity: 0,
    });
  };

  const fadeIn = (index, duration) => {
    TweenLite.to(testimonialList.children[index], duration, {
      opacity: 1,
      delay: 1,
    });
  };

  const nextSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive2: true });
      //Image transition
      slideLeft(0, 1);
      slideLeft(1, 1);
      scale(1, 1);
      slideLeft(2, 1);
      slideLeft(2, 0);
      fadeOut(0, 1);
      fadeIn(1, 1);
    } else if (imageList.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive3: true });
      //Image transition
      slideRight(0, 1);
      slideLeft(1, 1, 2);
      slideLeft(2, 1, 2);
      scale(2, 1);
      //content transition
      fadeOut(1, 1);
      fadeIn(2, 1);
    } else if (imageList.children[2].classList.contains("active")) {
      setState({ isActive1: true, isActive3: false });
      //Image transition
      slideLeft(2, 1, 3);
      slideLeft(0, 1, 0);
      slideLeft(1, 0, 0);
      scale(0, 1);
      //content transition
      fadeOut(2, 1);
      fadeIn(0, 1);
      setpicselector(picselector == 0 ? 1 : 0);
    }
  };

  const prevSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive3: true });
      //Image transition
      slideLeft(2, 0, 3);
      slideLeft(2, 1, 2);
      scale(2, 1);
      slideRight(0, 1);
      slideRight(1, 1);
      //content transtion
      fadeOut(0, 1);
      fadeIn(2, 1);
    } else if (imageList.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive1: true });
      //Image transition
      slideLeft(0, 0);
      slideRight(0, 1, 0);
      slideRight(1, 1, 0);
      slideRight(2, 1, 2);
      scale(0, 1);
      //content transtion
      fadeOut(1, 1);
      fadeIn(0, 1);
    } else if (imageList.children[2].classList.contains("active")) {
      setState({ isActive2: true, isActive3: false });
      slideLeft(2, 1);
      slideLeft(1, 0, 2);
      slideLeft(1, 1);
      scale(1, 1);
      //content transtion
      fadeOut(2, 1);
      setpicselector(picselector == 0 ? 1 : 0);
      fadeIn(1, 1);
    }
  };

  return (
    <div className="align-test">
      <div className="testi-logo" />
      {(window.innerWidth<1050)?
      <div className="flex-testi">
        <Fade left duration={3000}>
          <figure className="snip1192">
            <blockquote>
              Calvin: Sometimes when I'm talking with others, my words can't
              keep up with my thoughts. I wonder why we think faster than we
              speak. Hobbes: Probably so we can think twice.{" "}
            </blockquote>
            <div className="author">
              <img src={img1} alt="sq-sample1" />
              <h5>
                Pelican Steve <span> LittleSnippets</span>
              </h5>
            </div>
          </figure>
        </Fade>
        <Fade top duration={3000}>
          <figure className="snip1192 hover">
            <blockquote>
              Thank you. before I begin, I'd like everyone to notice that my
              report is in a professional, clear plastic binder...When a report
              looks this good, you know it'll get an A. That's a tip kids. Write
              it down.
            </blockquote>
            <div className="author">
              <img src={img2} alt="sq-sample29" />
              <h5>
                Max Conversion<span> LittleSnippets</span>
              </h5>
            </div>
          </figure>
        </Fade>
        <Fade top duration={3000}>
          <figure className="snip1192">
            <blockquote>
              My behaviour is addictive functioning in a disease process of
              toxic co-dependency. I need holistic healing and wellness before
              I'll accept any responsibility for my actions.
            </blockquote>
            <div className="author">
              <img src={img3} alt="sq-sample29" />
              <h5>
                Eleanor Faint<span> LittleSnippets</span>
              </h5>
            </div>
          </figure>
        </Fade>
        <Fade bottom duration={3000}>
          <figure className="snip1192">
            <blockquote>
              My behaviour is addictive functioning in a disease process of
              toxic co-dependency. I need holistic healing and wellness before
              I'll accept any responsibility for my actions.
            </blockquote>
            <div className="author">
              <img src={img4} alt="sq-sample29" />
              <h5>
                Eleanor Faint<span> LittleSnippets</span>
              </h5>
            </div>
          </figure>
        </Fade>
        <Fade right duration={3000}>
          <figure className="snip1192">
            <blockquote>
              My behaviour is addictive functioning in a disease process of
              toxic co-dependency. I need holistic healing and wellness before
              I'll accept any responsibility for my actions.
            </blockquote>
            <div className="author">
              <img src={img5} alt="sq-sample29" />
              <h5>
                Eleanor Faint<span> LittleSnippets</span>
              </h5>
            </div>
          </figure>
        </Fade>
      </div>
     :<h1></h1>}

      <div className="testimonial-section">
      <div className="testi-log" />
        <div className="testimonial-container">
          <div onClick={prevSlide} className="arrows left">
            <span>
              <img src={leftArrow} alt="left arrow" />
            </span>
          </div>
          <div className="inner">
            <div className="t-image">
              <BsCircleFill className="bl-circle"/>
              <ul ref={(el) => (imageList = el)}>
                <li className={state.isActive1 ? "active" : ""}>
                  <img src={testimonials[0].image} alt={testimonials[0].name} className="test-img-dsgn"/>
                </li>
                <li className={state.isActive2 ? "active" : ""}>
                  <img src={testimonials[1].image} alt={testimonials[0].name} className="test-img-dsgn"/>
                </li>

                <li className={state.isActive3 ? "active" : ""}>
                  <img src={testimonials[2].image} alt={testimonials[0].name} className="test-img-dsgn"/>
                </li>
              </ul>
            </div>
            <div className="t-content">
              <ul ref={(el) => (testimonialList = el)}>
                <li className={state.isActive1 ? "active" : ""}>
                  <div className="content-inner dsgn">
                    <p className="quote">{testimonials[0].quote}</p>
                    <h3 className="name">{testimonials[0].name}</h3>
                    <h4 className="title">{testimonials[0].title}</h4>
                  </div>
                </li>
                <li className={state.isActive2 ? "active" : ""}>
                  <div className="content-inner dsgn">
                    <p className="quote">{testimonials[1].quote}</p>
                    <h3 className="name">{testimonials[1].name}</h3>
                    <h4 className="title">{testimonials[1].title}</h4>
                  </div>
                </li>
                <li className={state.isActive3 ? "active" : ""}>
                  <div className="content-inner dsgn">
                    <p className="quote">{testimonials[2].quote}</p>
                    <h3 className="name">{testimonials[2].name}</h3>
                    <h4 className="title">{testimonials[2].title}</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="arrows right" onClick={nextSlide}>
            <img src={rightArrow} alt="right arrow" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Testimonials;
