import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import Cards from"./Cards"
import Fade from 'react-reveal/Fade';
import "../styles/MyCarousel.css"
const data=[
  {
    name:"Shambhavi Khanna",
    img:"https://drive.google.com/thumbnail?id=1KBd08ag2qYwEHeH73TwHXhokGyMv2fb8",
    des:"Rajasthan Subsection Representative ",
    lin:"http://linkedin.com/in/shambhavi-khanna-5098a7199",
    ig:"https://instagram.com/shambhavi.khanna?utm_medium=copy_link"
  },
  {
    name:"Divita Gulati",
    img:"https://drive.google.com/thumbnail?id=1AfZ7Oij0LNT8gKeFfi0gZK06RZ89rpGo",
    des:"Networking and Social Media Coordinator",
    lin:"https://www.linkedin.com/in/divita-gulati-58a1181a4",
    ig:"https://www.instagram.com/divitagulati/"
  },
  {
    name:"Aishwarya Chand",
    img:"https://drive.google.com/thumbnail?id=1IbgwT7uhCzNu2HEeRxvZIKOFpsxJZEAU",
    des:"Editorial Coordinator ",
    lin:"https://www.linkedin.com/in/aishwarya-chand-2022/",
    ig:"https://www.instagram.com/aishwaryaaa_chand/"
  },
  {
    name:"Tanisha Dhawan",
    img:"https://drive.google.com/thumbnail?id=14IvhLBlDuyH8t31dJhTklWAT2QS3ptyd",
    des:"Editorial Lead",
    lin:"https://www.linkedin.com/in/tanisha-dhawan-9b1b331ab",
    ig:"https://instagram.com/ta.n.isha?utm_medium=copy_link"
  },
  {
    name:"Piyush Kumar Sahoo",
    img:"https://drive.google.com/thumbnail?id=1Lwt98bwTLHu9Jzgd3DfpwlLNSdKI1ZV0",
    des:"Section Student Representative",
    lin:"https://www.linkedin.com/in/piyush-kumar-sahoo-dtu",
    ig:"http://www.instagram.com/piyush_kumar_sahoo_"
  },
  {
    name:"Garima Patel",
    img:"https://drive.google.com/thumbnail?id=1xUITrz-UfAcpk7tN3S_xeDOim0FYU6vQ",
    des:"Mentor",
    lin:"https://www.linkedin.com/in/garima-patel",
    ig:""
  },
  {
    name:"Charu Kaushik",
    img:"https://drive.google.com/thumbnail?id=1jVo2ZuUZQQ46nXXLSAcNnteIS4P0waZz",
    des:"Networking and Social Media Coordinator",
    lin:"http://linkedin.com/in/charu-kaushik-466532193",
    ig:"https://instagram.com/charu_kaushik_?utm_medium=copy_link"
  },
  {
    name:"Khushi Kathuria",
    img:"https://drive.google.com/thumbnail?id=1gRqX0JbQuKkbAM5AbVpq_DMcSvZzsWUC",
    des:"WIE coordinator ",
    lin:"https://www.linkedin.com/in/khushi-kathuria-858a111a6",
    ig:"https://www.instagram.com/p/CS6gu-ZBDDoa917nzsUbuIPqP4DU0XX7BGuiO00/?utm_medium=copy_link"
  },
  {
    name:"Vaibhav Srivastava",
    img:"https://drive.google.com/thumbnail?id=1EvqBZnyf8BFm7JGEa8SvLqK35jqGiVTl",
    des:"Graphic Design Lead",
    lin:"https://www.linkedin.com/in/vaibhav-2107/",
    ig:"www.instagram.com/v__aibha__v"
  },
  {
    name:"Gagan Singh",
    img:"https://drive.google.com/thumbnail?id=1oAm48sVdQp2sUXjT_FoYDW83gjntDOQZ",
    des:"SSR (Section Student Representative)",
    lin:"https://www.linkedin.com/in/gagansingh35",
    ig:"https://www.instagram.com/theaasmaan/"
  },
  {
    name:"Harshit Singh",
    img:"https://drive.google.com/thumbnail?id=1ZAvvFMfyUJM1xgv71wPU7SEgr5EU0qK1",
    des:"Technical Activities Coordinator",
    lin:"https://www.linkedin.com/in/harshit-singh-lko/",
    ig:"https://www.instagram.com/masky814/"
  },
  {
    name:"Disha Vagrecha",
    img:"https://drive.google.com/thumbnail?id=1MOX66_g76oX97yw0rBtCNnld0Uhs7gI_",
    des:"NSM Coordinator",
    lin:"https://www.linkedin.com/in/disha-vagrecha-01687b192",
    ig:"https://instagram.com/vagrecha_d"
  },
  {
    name:"Aditi Tripathi",
    img:"https://drive.google.com/thumbnail?id=1BqW3PgZeQiFjc0EQA33y7qdfTrzIwx3D",
    des:"Technical Activity Coordinator",
    lin:"https://www.linkedin.com/in/aditi-tripathi-a63793167/",
    ig:"https://www.instagram.com/aditi_tripathi10/"
  },
  {
    name:"Hemang Sinha",
    img:"https://drive.google.com/thumbnail?id=1h6LUkC4iTux9YnIxKisaZjHqcUjD0MX4",
    des:"Networking and Social Media Coordinator",
    lin:"https://in.linkedin.com/in/hemang-sinha-0485081a4",
    ig:"https://www.instagram.com/hem.sin.007"
  },
  {
    name:"Shalini Aggarwal",
    img:"https://drive.google.com/thumbnail?id=16dpJf2f2iQS4Lq9NpUowTJJTxRVM6wIO",
    des:"Graphic Designing Coordinator",
    lin:"https://www.linkedin.com/in/shalini-agrawal-a07852177",
    ig:"https://instagram.com/i_.m_.shalini?utm_medium=copy_link"
  },
  {
    name:"Priti Gangwar",
    img:"https://drive.google.com/thumbnail?id=1aM5N-ouKtRgN0UJKlQly0n_-WXHGTobL",
    des:"WIE Coordinator",
    lin:"https://www.linkedin.com/in/priti-gangwar-937252196/",
    ig:""
  },
  {
    name:"Sharone Verma",
    img:"https://drive.google.com/thumbnail?id=132Nbkw1qp2IiiTrxBjEKAy5X4svf59b8",
    des:"Chandigarh Subsection Student Representative",
    lin:"https://www.linkedin.com/mwlite/in/sharone-verma-536072175",
    ig:"https://instagram.com/sharone_verma"
  },
  {
    name:"Kashish Garg",
    img:"https://drive.google.com/thumbnail?id=1Nhn6xxo2poCF_nb7SwseySVDqSzC2HzV",
    des:"Editorial Coordinator",
    lin:"https://www.linkedin.com/in/gargkashish",
    ig:"https://www.instagram.com/_gargkashish/"
  },
  {
    name:"Manas Das",
    img:"https://drive.google.com/thumbnail?id=1lDzU_bnqOU6BvnQrT9NSb4ZByU0PMUvW",
    des:"Graphic Design Coordinator",
    lin:"https://www.linkedin.com/in/reach-manas-das/",
    ig:"https://www.instagram.com/qua_tranon/"
  },
  {
    name:"Monalika",
    img:"https://drive.google.com/thumbnail?id=1VgO4KpzZyi5LY0ho3XJwKsGFpzrG8xGV",
    des:"Networking and Social Media Lead",
    lin:"https://www.linkedin.com/in/monalika7/",
    ig:"https://www.instagram.com/monaalikaaa"
  },
  {
    name:"Ansh Dudeja",
    img:"https://drive.google.com/thumbnail?id=19zjQWY5N9XEHEcI-MLJu1uIuwG3gX1QX",
    des:"Networking and social media coordinator",
    lin:"https://www.linkedin.com/in/ansh-dudeja-60a956178",
    ig:"https://www.instagram.com/ansh_newacnt/"
  },
  {
    name:"J Ashwin Nair",
    img:"https://drive.google.com/thumbnail?id=1egEyIZibSFW8MlH0VKks8YAOzP8nKJlh",
    des:"Mentor",
    lin:"https://www.linkedin.com/in/jashwinnair/",
    ig:"https://www.instagram.com/jashwinnair/"
  },
  {
    name:"Shaleen Poddar",
    img:"https://drive.google.com/thumbnail?id=16zUs0ga9knTT9uXF6HjEDaxBJhtxl3jE",
    des:"Technical Activities Coordinator",
    lin:"https://www.linkedin.com/in/shaleen-poddar-447451178",
    ig:"https://www.instagram.com/shaleen_poddar/"
  },
  {
    name:"Shubham Singla",
    img:"https://drive.google.com/thumbnail?id=1EIVp68GPPTF-QRno6moVOa44R5bd0Vfx",
    des:"WIE Coordinator",
    lin:"https://www.linkedin.com/in/shubham-purshottam-singla-6b8a91194",
    ig:"https://www.instagram.com/sp_21160/"
  },
  {
    name:"Priyansh Tyagi",
    img:"https://drive.google.com/thumbnail?id=1ejZzAzGIiZaxHRuzyaUvOi7SG_7HfZFo",
    des:"Lead - Technical Activities Coordinator",
    lin:"https://www.linkedin.com/in/priyanshtyagi",
    ig:"https://www.instagram.com/prxyxnsh/"
  },
]
class MyCarousel extends Component {
  

  render() {
    return (
  <div className="align-cards" id="SSN21">

<div className="team">

      
      <div className="ssn_title"/>
      <Fade right duration={3000}>

        <div className="img-team"/>
      </Fade>

          <div className="cards">
      <div className="container_style">
        <ReactCardCarousel autoplay={true} autoplay_speed={2500}>

          <Cards data={data[0]}/>
          <Cards data={data[1]}/>
         
          <Cards data={data[2]}/>
          <Cards data={data[3]}/>
         
          <Cards data={data[4]}/>
          <Cards data={data[5]}/>
         
          <Cards data={data[6]}/>
          <Cards data={data[7]}/>
         
          <Cards data={data[8]}/>
          <Cards data={data[9]}/>
          <Cards data={data[10]}/>
          <Cards data={data[11]}/>
          <Cards data={data[12]}/>
          <Cards data={data[13]}/>
          <Cards data={data[14]}/>
          <Cards data={data[15]}/>
          <Cards data={data[16]}/>
          <Cards data={data[17]}/>
          <Cards data={data[18]}/>
          <Cards data={data[19]}/>
          <Cards data={data[20]}/>
          <Cards data={data[21]}/>
          <Cards data={data[22]}/>
          <Cards data={data[23]}/>
          <Cards data={data[24]}/>
        
         
          
         
        </ReactCardCarousel>
          </div>
</div>
       
      </div>
  </div>

    );
  }
}

export default MyCarousel;
