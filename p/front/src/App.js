import React, { useEffect, useState } from "react";
import "./App.css"
import Cards from "./Cards";
import axios from "axios";
import CV from "./CV.pdf"
import { useTypewriter, Cursor } from "react-simple-typewriter";
import toast, { Toaster } from 'react-hot-toast';

import { Details } from './Deatils'
import { gapi } from "gapi-script";

import Fbcomments from "./Fbcomments";
import ContactForm from "./OAuth/ContactForm";

// const ClientID = process.env.REACT_APP_CLIENT_ID

function App() {
  // useEffect(()=>{
  //   function start(){
  //     gapi.client.init({
  //       clientID : ClientID,
  //       scope:""
  //     })
  //   };
  //   gapi.load("client:auth2",start);
  // })
  const [Light, setToDark] = useState(true)
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const projet1 = <Cards 
                          title={Details.prj1.title}
                          pic={Details.prj1.pic} 
                          descr={Details.prj1.descriprion} 
                          imgs={Details.prj1.images}
                          links={Details.prj1.links}
                          title2={Details.prj2.title}
                          pic2={Details.prj2.pic} 
                          descr2={Details.prj2.descriprion} 
                          imgs2={Details.prj2.images}
                          links2={Details.prj2.links}
                          /> 
  const projet2 = <Cards 
                          title={Details.prj3.title}
                          pic={Details.prj3.pic} 
                          descr={Details.prj3.descriprion} 
                          imgs={Details.prj3.images}
                          links={Details.prj3.links}
                          title2={Details.prj4.title}
                          pic2={Details.prj4.pic} 
                          descr2={Details.prj4.descriprion} 
                          imgs2={Details.prj4.images}
                          links2={Details.prj4.links}
                          /> 
 
  const projects = [projet1,projet2];

  const prevSlide = () => {
    const lastIndex = projects.length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = projects.length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  const moon = () => toast('Hello Darkness!',
  {
    icon: '🌑',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
  );;
  const sun = () => toast('Hello Lightness!',
  {
    icon: '☀️',
    style: {
      borderRadius: '10px',
      background: '#F48201',
      color: '#fff',
    },
  }
);;
  let bg
  if (Light === true) {
    bg = ` body {
        background-color: #f48201;
      }
      .custom-shape-divider-top-1674814307 .shape-fill {
        fill: #F48201;
      }`
  }
  else {
    bg = ` body {
        background-color: rgba(0, 0, 0, 0.864);
      }
      .frame-text16{
        color:white;
      }
      .custom-shape-divider-top-1674814307 .shape-fill {
        fill: #242321;
      }
      .portf{
        background-color:#121211
      }
      .hy{
        background:linear-gradient(315deg,#151515,#454340);
      }
      .hrf{
        background-color:#121211
      }
      .pandi{
        background-color:transparent;
      }
      .cards{
        background:transparent;
      }
      .shapedividers_com-4385::before{
        background-image: url('data:image/svg+xml;charset=utf8, <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 78"><g fill="%23121211"><path d="M207 37a1 1 0 00-1 1h2a1 1 0 001 0l-2-1zM209 28a2 2 0 00-1 3c0 1 2 2 3 1a2 2 0 001-2 2 2 0 00-3-2zM215 33a2 2 0 00-1-1c-2 1-2 5-2 7a3 3 0 001 1 2 2 0 002 0 3 3 0 001-1 5 5 0 000-5 3 3 0 00-1-1zM177 27c-3-1-6 1-5 4a4 4 0 006 2 3 3 0 001-2 4 4 0 00-2-4zM119 53c-2-1-4 1-3 3a3 3 0 004 2 2 2 0 001-2 3 3 0 00-2-3zM135 23a1 1 0 000 1c0 1 1 2 2 1a1 1 0 001-1l-3-1zM539 28a2 2 0 00-1 3c0 1 2 2 3 1a2 2 0 001-2 2 2 0 00-3-2zM537 37a1 1 0 00-1 1h2a1 1 0 001 0l-2-1zM545 33a2 2 0 00-1-1c-2 1-2 5-2 7a2 2 0 001 1 2 2 0 002 0 3 3 0 001-1 5 5 0 000-5 3 3 0 00-1-1zM449 53c-2-1-4 1-3 3a3 3 0 004 2 2 2 0 001-2 3 3 0 00-2-3zM507 27c-3-1-6 1-5 4a4 4 0 006 2 3 3 0 001-2 4 4 0 00-2-4zM465 23a1 1 0 000 1c0 1 1 2 2 1a1 1 0 001-1l-3-1zM879 28a2 2 0 00-1 3c0 1 2 2 4 1a2 2 0 000-2 2 2 0 00-3-2zM886 33a2 2 0 00-2-1c-2 1-2 5-2 7a2 2 0 002 1 2 2 0 001 0 3 3 0 001-1 5 5 0 001-5 3 3 0 00-1-1zM877 37a1 1 0 00-1 1h3c0-1-1-2-2-1zM847 27c-3-1-6 1-5 4a4 4 0 006 2 3 3 0 001-2 4 4 0 00-2-4zM789 53c-2-1-4 1-3 3a3 3 0 004 2 2 2 0 001-2 3 3 0 00-2-3zM805 23a1 1 0 000 1c0 1 1 2 2 1a1 1 0 001-1l-3-1z"/><path d="M1914 0H0v25h1c5 1 12 15 12 35 0 5 0 8 3 9h5c4-3 0-9 1-13 1-3 4-7 7-4l3 3c3 1 4-1 4-3 1-4-2-19 3-25 3-5 8-6 12-4 7 3 18 2 23 9 2 4 2 25-1 30-1 2-3 4-3 7 0 5 5 9 10 9a8 8 0 002 0c6-2 9-9 4-15-2-3-5-14-5-21 1-12 7-22 14-30l14 14a12 12 0 013 10c-2 6 0 12 6 12 6-1 8-5 7-9a13 13 0 00-2-5c-3-4 2-13 7-15a13 13 0 0113 3c5 4 4 8 4 12 0 22-3 27-3 33 0 3 3 7 5 7 7 2 11-2 11-9-1-8-4-10-3-28 0-2 2-4 4-3s0 6 1 8a4 4 0 004 3 4 4 0 004-3l-1-10c-1-8 6-15 15-13 8 1 12 8 13 25l-2 6a6 6 0 003 9 9 9 0 006 0c4-1 5-6 3-9a26 26 0 00-2-3 10 10 0 01-1-5c-1-5 0-9 1-12a63 63 0 018-15c8 9 16 12 16 18 0 3-1 6 1 8h6c3-2 1-4 1-6 0-5 2-8 6-8 9 2 7 8 7 13l1 5c1 1 3 0 4-1s2-3 4-2c3 1 2 6 2 8a42 42 0 00-1 7c0 4 5 8 9 8s8-5 8-9l-2-13c1-6 4-8 7-8 7 0 6 6 10 4 4-1 2-6 4-10 2-1 4 0 5 1s0 4 2 4 1-3 2-5c0-2 3-3 6-2 5 0 4 7 3 8a5 5 0 01-1 2c-4 5-2 11 5 11 5 1 11-5 8-10s-3-10-1-16a3 3 0 002 2 9 9 0 003 1c5 1 13 15 13 35 0 5 0 8 3 9h5c4-3 0-10 1-13s4-7 7-4l3 3c3 1 4-1 4-3 1-4-2-19 3-25 3-5 8-6 11-4 7 2 19 1 24 9 2 4 2 25-1 30-1 2-3 4-3 7 0 4 5 9 10 9a8 8 0 002 0c6-2 9-9 4-15-2-3-5-14-5-21 0-12 7-22 14-30l14 14a12 12 0 013 10c-2 6 0 12 6 12 6-1 7-5 7-9a13 13 0 00-2-5c-3-4 1-13 7-15a13 13 0 0113 3c5 4 4 8 4 12 0 22-3 27-3 33 0 3 3 7 5 7 7 2 11-2 11-9-1-8-4-10-3-28 0-2 2-4 4-3s0 6 1 8a4 4 0 004 3 4 4 0 004-3l-1-10c-1-8 6-15 15-13 8 1 12 8 13 25l-2 6a6 6 0 003 9 9 9 0 006 0c4-1 4-6 3-9a27 27 0 00-2-3 10 10 0 01-1-5c-1-5 0-9 1-12a63 63 0 018-15c9 9 16 12 16 18l1 8h6c3-2 1-4 1-6 0-5 2-8 6-8 10 2 7 8 7 13l1 5c1 1 3 0 4-1s2-3 4-2c3 1 2 6 2 8a42 42 0 00-1 7c0 4 5 8 9 8s8-5 8-9c-1-3-2-10-1-13 0-6 3-8 6-8 7 0 6 6 11 4 3-1 1-6 4-10 1-1 3 0 4 1s0 4 2 4 1-3 2-5c0-2 3-3 6-2 5 0 4 7 3 8a5 5 0 01-1 2c-4 5-2 11 5 11 6 1 11-5 8-10-6-10 1-19 7-27l3 7c0 2-1 5 1 6a9 9 0 004 1c5 1 13 15 12 35 0 5 0 8 3 9h5c4-3 0-10 1-13s5-7 7-4c2 0 2 2 4 3s3-1 4-3c0-4-3-19 2-25 3-5 9-6 12-4 7 2 18 1 23 9 2 4 2 25-1 30-1 2-3 4-3 7 0 4 5 9 10 9a8 8 0 002 0c6-2 9-9 4-15-2-3-5-14-5-21 1-12 7-22 14-30l14 14a12 12 0 013 10c-2 6 0 12 7 12 5-1 7-5 6-9a13 13 0 00-2-5c-3-4 2-13 7-15a13 13 0 0113 3c5 4 4 8 4 12 0 22-3 27-3 33 0 3 3 7 5 7 7 2 12-2 11-9-1-8-4-10-3-28 0-2 2-4 4-3s0 6 1 8a4 4 0 004 3 4 4 0 004-3l-1-10c-1-8 6-15 16-13 8 1 12 8 12 25l-2 6a6 6 0 003 9 9 9 0 006 0c4-1 5-6 3-9a27 27 0 00-2-3 10 10 0 01-1-5c-1-5 0-9 1-12a63 63 0 018-15c9 9 16 12 16 18 0 3 0 6 2 8h5c3-2 1-4 1-6 0-5 2-8 6-8 10 2 7 8 7 13l1 5c1 1 3 0 4-1s2-3 4-2c3 1 2 6 2 8a44 44 0 00-1 7c0 4 5 8 9 8s8-5 8-9c-1-3-2-10-1-13 0-6 3-8 6-8 7 0 6 6 11 4 3-1 1-6 4-10 1-1 3 0 4 1s0 4 2 4 1-3 2-5 3-3 7-2c4 0 3 7 3 8a5 5 0 01-1 2c-5 5-2 11 4 11 6 1 11-5 8-10-5-8-1-16 4-23 5 7 9 15 4 23-3 5 3 11 8 10 7 0 9-6 5-11a5 5 0 01-1-2c-1-1-2-8 3-8 3-1 6 0 7 2s-1 5 1 5 2-2 3-4 3-2 4-1c2 4 0 9 4 10 4 2 4-4 10-4 3 0 6 2 7 8l-1 13c-1 4 2 8 7 9s9-4 9-8a44 44 0 00-1-7c0-2-1-7 2-8 2-1 3 1 4 2s3 2 4 1l1-5c0-5-2-11 7-13 5 0 6 3 6 8 0 2-1 4 1 6h6c2-2 1-5 1-8 0-6 8-9 16-18a63 63 0 018 15c2 3 2 7 2 12a10 10 0 01-2 5 27 27 0 00-2 3c-1 3-1 8 3 9a9 9 0 006 0 6 6 0 003-9l-2-6c1-17 5-24 13-25 9-2 16 5 15 13v10a4 4 0 003 3 4 4 0 004-3c1-2-1-7 2-8 1-1 3 1 3 3 1 18-2 20-3 28 0 7 4 11 11 9 3 0 5-4 5-7 0-6-3-11-3-33 0-4 0-8 4-12a13 13 0 0113-3c6 2 10 11 7 15a13 13 0 00-2 5c0 4 1 8 7 9 6 0 8-6 6-12a12 12 0 013-10l14-14c7 8 14 18 14 30 0 7-3 18-5 21-5 6-2 13 4 15a8 8 0 002 0c5 0 10-4 10-9 0-3-2-5-3-7-3-5-3-26-1-30 5-7 16-6 23-9 4-2 9-1 12 4 5 6 2 21 3 25 0 2 1 4 4 3l3-3c3-3 6 1 7 4 1 4-3 10 1 13h5c3-1 3-4 3-9 0-20 7-34 12-35a9 9 0 004-1c2-1 1-4 2-6l3-7c5 8 12 18 6 27-3 5 3 11 8 11 7-1 9-7 5-12a5 5 0 01-1-2c-1-1-2-8 3-8 3-1 6 0 7 2s-1 5 1 5 2-2 3-4 2-2 4-1c2 4 0 9 4 10 4 2 4-4 10-4 3 0 6 2 7 8l-1 13c-1 4 2 8 7 9s9-4 9-8a42 42 0 00-1-6c0-3-1-8 2-9 2-1 3 1 4 2s3 2 4 1l1-5c0-5-2-11 7-13 5 0 6 3 6 8 0 2-1 4 1 6h6c2-2 1-5 1-8 0-6 8-9 16-18a63 63 0 018 15c2 3 2 7 2 12a10 10 0 01-2 5 27 27 0 00-2 3c-1 3-1 8 3 10a9 9 0 006-1 6 6 0 003-9l-2-6c1-17 5-24 13-25 10-2 17 5 15 13v10a4 4 0 003 3 4 4 0 005-3c0-2-1-7 1-8 1-1 3 1 3 3 1 18-2 20-3 28 0 7 4 11 11 9 3 0 5-4 5-7 0-6-2-11-2-33 0-4-1-8 3-12a13 13 0 0113-3c6 2 10 11 7 15a13 13 0 00-1 5c-1 4 1 8 6 9 6 0 8-6 6-12a12 12 0 013-10l14-14c7 8 14 18 14 30 0 7-2 18-5 21-5 6-2 13 4 15a8 8 0 003 0c5 0 9-4 9-9 1-3-1-5-3-7-3-5-3-26-1-30 5-7 17-6 24-9 3-2 8-1 12 4 4 6 1 21 2 25 0 2 2 4 4 3l3-3c3-3 6 1 7 4 1 4-3 10 2 13h5c2-1 2-4 2-9 0-20 8-34 13-35a9 9 0 003-1 3 3 0 002-1c2 5 3 10-1 15-3 6 3 11 8 11 7-1 9-7 5-12a5 5 0 01-1-2c-1-1-2-8 3-8 3-1 6 0 7 2s-1 5 1 5 2-2 3-4 3-2 4-1c2 4 0 9 4 10 4 2 4-4 10-4 3 0 6 2 7 8l-1 13c-1 4 2 8 7 9s9-3 9-8a42 42 0 00-1-6c0-3-1-8 2-9 2-1 3 1 4 2s3 2 4 1l1-5c0-5-2-11 7-13 5 0 6 3 6 8 0 2-1 4 1 6 2 1 4 2 6 0s1-5 1-8c0-6 8-9 16-18a63 63 0 018 15c2 3 2 7 2 12a10 10 0 01-2 5 26 26 0 00-2 3c-1 3-1 8 3 10a9 9 0 006-1 6 6 0 003-9l-2-6c1-17 5-24 13-25 10-2 17 5 15 13v10a4 4 0 003 3 4 4 0 005-3c0-2-1-7 1-8 1-1 3 1 3 3 1 18-2 20-3 28 0 7 4 11 11 9 3 0 5-4 5-7 0-6-2-11-2-33 0-4-1-8 3-12a13 13 0 0113-3c6 2 10 11 7 15a13 13 0 00-1 5c-1 4 1 8 6 9 6 0 8-6 6-12a12 12 0 013-10l14-14c7 8 14 18 14 30 0 7-2 18-5 21-5 6-2 13 4 15a8 8 0 003 0c5 0 9-4 9-9 1-3-1-5-3-7-3-5-3-26-1-30 5-7 17-6 24-9 3-2 8-1 12 4 4 6 1 21 2 25 0 2 2 4 4 3l3-3c3-3 6 1 7 4 1 4-3 10 2 13h5c2-1 2-4 2-9 0-20 8-34 13-35V0z"/><path d="M1794 38a1 1 0 000-1c-1-1-2 0-2 1h2zM1792 31a2 2 0 00-1-3 2 2 0 00-2 2 2 2 0 000 2c1 1 3 0 3-1zM1787 32a2 2 0 00-2 1 3 3 0 00-1 1 5 5 0 000 5 3 3 0 001 1 2 2 0 002 0 3 3 0 001-2c1-1 0-5-1-6zM1865 23l-2 1a1 1 0 001 1c0 1 2 0 1-1a1 1 0 000-1zM1881 53a3 3 0 00-1 3 2 2 0 001 2 3 3 0 004-2c0-2-2-4-4-3zM1824 27a4 4 0 00-3 4 3 3 0 002 2 4 4 0 006-2c1-3-3-5-5-4zM1551 53a3 3 0 00-1 3 2 2 0 001 2 3 3 0 004-2c0-2-2-4-4-3zM1535 23l-2 1a1 1 0 001 1c0 1 2 0 1-1a1 1 0 000-1zM1464 38a1 1 0 000-1c-1-1-2 0-2 1h2zM1457 32a2 2 0 00-2 1 3 3 0 00-1 1 5 5 0 000 5 3 3 0 001 1 2 2 0 002 0 2 2 0 001-2c1-1 0-5-1-6zM1494 27a4 4 0 00-3 4 3 3 0 002 2 4 4 0 006-2c1-3-3-5-5-4zM1462 31a2 2 0 00-1-3 2 2 0 00-2 2 2 2 0 000 2c1 1 3 0 3-1zM1124 38a1 1 0 000-1c-1-1-2 0-2 1h2zM1116 32a2 2 0 00-1 1 3 3 0 00-1 1 5 5 0 000 5 3 3 0 001 1 2 2 0 002 0 2 2 0 001-2c1-1 0-5-2-6zM1122 31a2 2 0 00-1-3 2 2 0 00-3 2 2 2 0 001 2c1 1 3 0 3-1zM1195 23l-3 1a1 1 0 002 1c0 1 2 0 1-1a1 1 0 000-1zM1153 27a4 4 0 00-2 4 3 3 0 001 2 4 4 0 007-2c1-3-3-5-6-4zM1211 53a3 3 0 00-2 3 2 2 0 001 2 3 3 0 005-2c0-2-2-4-4-3z"/></g></svg>'); 
      }
      @media (min-width:1025px){
        .shapedividers_com-4385::before{  
        background-image: url('data:image/svg+xml;charset=utf8, <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 78"><g fill="%23121211"><path d="M207 37a1 1 0 00-1 1h2a1 1 0 001 0l-2-1zM209 28a2 2 0 00-1 3c0 1 2 2 3 1a2 2 0 001-2 2 2 0 00-3-2zM215 33a2 2 0 00-1-1c-2 1-2 5-2 7a3 3 0 001 1 2 2 0 002 0 3 3 0 001-1 5 5 0 000-5 3 3 0 00-1-1zM177 27c-3-1-6 1-5 4a4 4 0 006 2 3 3 0 001-2 4 4 0 00-2-4zM119 53c-2-1-4 1-3 3a3 3 0 004 2 2 2 0 001-2 3 3 0 00-2-3zM135 23a1 1 0 000 1c0 1 1 2 2 1a1 1 0 001-1l-3-1zM539 28a2 2 0 00-1 3c0 1 2 2 3 1a2 2 0 001-2 2 2 0 00-3-2zM537 37a1 1 0 00-1 1h2a1 1 0 001 0l-2-1zM545 33a2 2 0 00-1-1c-2 1-2 5-2 7a2 2 0 001 1 2 2 0 002 0 3 3 0 001-1 5 5 0 000-5 3 3 0 00-1-1zM449 53c-2-1-4 1-3 3a3 3 0 004 2 2 2 0 001-2 3 3 0 00-2-3zM507 27c-3-1-6 1-5 4a4 4 0 006 2 3 3 0 001-2 4 4 0 00-2-4zM465 23a1 1 0 000 1c0 1 1 2 2 1a1 1 0 001-1l-3-1zM879 28a2 2 0 00-1 3c0 1 2 2 4 1a2 2 0 000-2 2 2 0 00-3-2zM886 33a2 2 0 00-2-1c-2 1-2 5-2 7a2 2 0 002 1 2 2 0 001 0 3 3 0 001-1 5 5 0 001-5 3 3 0 00-1-1zM877 37a1 1 0 00-1 1h3c0-1-1-2-2-1zM847 27c-3-1-6 1-5 4a4 4 0 006 2 3 3 0 001-2 4 4 0 00-2-4zM789 53c-2-1-4 1-3 3a3 3 0 004 2 2 2 0 001-2 3 3 0 00-2-3zM805 23a1 1 0 000 1c0 1 1 2 2 1a1 1 0 001-1l-3-1z"/><path d="M1914 0H0v25h1c5 1 12 15 12 35 0 5 0 8 3 9h5c4-3 0-9 1-13 1-3 4-7 7-4l3 3c3 1 4-1 4-3 1-4-2-19 3-25 3-5 8-6 12-4 7 3 18 2 23 9 2 4 2 25-1 30-1 2-3 4-3 7 0 5 5 9 10 9a8 8 0 002 0c6-2 9-9 4-15-2-3-5-14-5-21 1-12 7-22 14-30l14 14a12 12 0 013 10c-2 6 0 12 6 12 6-1 8-5 7-9a13 13 0 00-2-5c-3-4 2-13 7-15a13 13 0 0113 3c5 4 4 8 4 12 0 22-3 27-3 33 0 3 3 7 5 7 7 2 11-2 11-9-1-8-4-10-3-28 0-2 2-4 4-3s0 6 1 8a4 4 0 004 3 4 4 0 004-3l-1-10c-1-8 6-15 15-13 8 1 12 8 13 25l-2 6a6 6 0 003 9 9 9 0 006 0c4-1 5-6 3-9a26 26 0 00-2-3 10 10 0 01-1-5c-1-5 0-9 1-12a63 63 0 018-15c8 9 16 12 16 18 0 3-1 6 1 8h6c3-2 1-4 1-6 0-5 2-8 6-8 9 2 7 8 7 13l1 5c1 1 3 0 4-1s2-3 4-2c3 1 2 6 2 8a42 42 0 00-1 7c0 4 5 8 9 8s8-5 8-9l-2-13c1-6 4-8 7-8 7 0 6 6 10 4 4-1 2-6 4-10 2-1 4 0 5 1s0 4 2 4 1-3 2-5c0-2 3-3 6-2 5 0 4 7 3 8a5 5 0 01-1 2c-4 5-2 11 5 11 5 1 11-5 8-10s-3-10-1-16a3 3 0 002 2 9 9 0 003 1c5 1 13 15 13 35 0 5 0 8 3 9h5c4-3 0-10 1-13s4-7 7-4l3 3c3 1 4-1 4-3 1-4-2-19 3-25 3-5 8-6 11-4 7 2 19 1 24 9 2 4 2 25-1 30-1 2-3 4-3 7 0 4 5 9 10 9a8 8 0 002 0c6-2 9-9 4-15-2-3-5-14-5-21 0-12 7-22 14-30l14 14a12 12 0 013 10c-2 6 0 12 6 12 6-1 7-5 7-9a13 13 0 00-2-5c-3-4 1-13 7-15a13 13 0 0113 3c5 4 4 8 4 12 0 22-3 27-3 33 0 3 3 7 5 7 7 2 11-2 11-9-1-8-4-10-3-28 0-2 2-4 4-3s0 6 1 8a4 4 0 004 3 4 4 0 004-3l-1-10c-1-8 6-15 15-13 8 1 12 8 13 25l-2 6a6 6 0 003 9 9 9 0 006 0c4-1 4-6 3-9a27 27 0 00-2-3 10 10 0 01-1-5c-1-5 0-9 1-12a63 63 0 018-15c9 9 16 12 16 18l1 8h6c3-2 1-4 1-6 0-5 2-8 6-8 10 2 7 8 7 13l1 5c1 1 3 0 4-1s2-3 4-2c3 1 2 6 2 8a42 42 0 00-1 7c0 4 5 8 9 8s8-5 8-9c-1-3-2-10-1-13 0-6 3-8 6-8 7 0 6 6 11 4 3-1 1-6 4-10 1-1 3 0 4 1s0 4 2 4 1-3 2-5c0-2 3-3 6-2 5 0 4 7 3 8a5 5 0 01-1 2c-4 5-2 11 5 11 6 1 11-5 8-10-6-10 1-19 7-27l3 7c0 2-1 5 1 6a9 9 0 004 1c5 1 13 15 12 35 0 5 0 8 3 9h5c4-3 0-10 1-13s5-7 7-4c2 0 2 2 4 3s3-1 4-3c0-4-3-19 2-25 3-5 9-6 12-4 7 2 18 1 23 9 2 4 2 25-1 30-1 2-3 4-3 7 0 4 5 9 10 9a8 8 0 002 0c6-2 9-9 4-15-2-3-5-14-5-21 1-12 7-22 14-30l14 14a12 12 0 013 10c-2 6 0 12 7 12 5-1 7-5 6-9a13 13 0 00-2-5c-3-4 2-13 7-15a13 13 0 0113 3c5 4 4 8 4 12 0 22-3 27-3 33 0 3 3 7 5 7 7 2 12-2 11-9-1-8-4-10-3-28 0-2 2-4 4-3s0 6 1 8a4 4 0 004 3 4 4 0 004-3l-1-10c-1-8 6-15 16-13 8 1 12 8 12 25l-2 6a6 6 0 003 9 9 9 0 006 0c4-1 5-6 3-9a27 27 0 00-2-3 10 10 0 01-1-5c-1-5 0-9 1-12a63 63 0 018-15c9 9 16 12 16 18 0 3 0 6 2 8h5c3-2 1-4 1-6 0-5 2-8 6-8 10 2 7 8 7 13l1 5c1 1 3 0 4-1s2-3 4-2c3 1 2 6 2 8a44 44 0 00-1 7c0 4 5 8 9 8s8-5 8-9c-1-3-2-10-1-13 0-6 3-8 6-8 7 0 6 6 11 4 3-1 1-6 4-10 1-1 3 0 4 1s0 4 2 4 1-3 2-5 3-3 7-2c4 0 3 7 3 8a5 5 0 01-1 2c-5 5-2 11 4 11 6 1 11-5 8-10-5-8-1-16 4-23 5 7 9 15 4 23-3 5 3 11 8 10 7 0 9-6 5-11a5 5 0 01-1-2c-1-1-2-8 3-8 3-1 6 0 7 2s-1 5 1 5 2-2 3-4 3-2 4-1c2 4 0 9 4 10 4 2 4-4 10-4 3 0 6 2 7 8l-1 13c-1 4 2 8 7 9s9-4 9-8a44 44 0 00-1-7c0-2-1-7 2-8 2-1 3 1 4 2s3 2 4 1l1-5c0-5-2-11 7-13 5 0 6 3 6 8 0 2-1 4 1 6h6c2-2 1-5 1-8 0-6 8-9 16-18a63 63 0 018 15c2 3 2 7 2 12a10 10 0 01-2 5 27 27 0 00-2 3c-1 3-1 8 3 9a9 9 0 006 0 6 6 0 003-9l-2-6c1-17 5-24 13-25 9-2 16 5 15 13v10a4 4 0 003 3 4 4 0 004-3c1-2-1-7 2-8 1-1 3 1 3 3 1 18-2 20-3 28 0 7 4 11 11 9 3 0 5-4 5-7 0-6-3-11-3-33 0-4 0-8 4-12a13 13 0 0113-3c6 2 10 11 7 15a13 13 0 00-2 5c0 4 1 8 7 9 6 0 8-6 6-12a12 12 0 013-10l14-14c7 8 14 18 14 30 0 7-3 18-5 21-5 6-2 13 4 15a8 8 0 002 0c5 0 10-4 10-9 0-3-2-5-3-7-3-5-3-26-1-30 5-7 16-6 23-9 4-2 9-1 12 4 5 6 2 21 3 25 0 2 1 4 4 3l3-3c3-3 6 1 7 4 1 4-3 10 1 13h5c3-1 3-4 3-9 0-20 7-34 12-35a9 9 0 004-1c2-1 1-4 2-6l3-7c5 8 12 18 6 27-3 5 3 11 8 11 7-1 9-7 5-12a5 5 0 01-1-2c-1-1-2-8 3-8 3-1 6 0 7 2s-1 5 1 5 2-2 3-4 2-2 4-1c2 4 0 9 4 10 4 2 4-4 10-4 3 0 6 2 7 8l-1 13c-1 4 2 8 7 9s9-4 9-8a42 42 0 00-1-6c0-3-1-8 2-9 2-1 3 1 4 2s3 2 4 1l1-5c0-5-2-11 7-13 5 0 6 3 6 8 0 2-1 4 1 6h6c2-2 1-5 1-8 0-6 8-9 16-18a63 63 0 018 15c2 3 2 7 2 12a10 10 0 01-2 5 27 27 0 00-2 3c-1 3-1 8 3 10a9 9 0 006-1 6 6 0 003-9l-2-6c1-17 5-24 13-25 10-2 17 5 15 13v10a4 4 0 003 3 4 4 0 005-3c0-2-1-7 1-8 1-1 3 1 3 3 1 18-2 20-3 28 0 7 4 11 11 9 3 0 5-4 5-7 0-6-2-11-2-33 0-4-1-8 3-12a13 13 0 0113-3c6 2 10 11 7 15a13 13 0 00-1 5c-1 4 1 8 6 9 6 0 8-6 6-12a12 12 0 013-10l14-14c7 8 14 18 14 30 0 7-2 18-5 21-5 6-2 13 4 15a8 8 0 003 0c5 0 9-4 9-9 1-3-1-5-3-7-3-5-3-26-1-30 5-7 17-6 24-9 3-2 8-1 12 4 4 6 1 21 2 25 0 2 2 4 4 3l3-3c3-3 6 1 7 4 1 4-3 10 2 13h5c2-1 2-4 2-9 0-20 8-34 13-35a9 9 0 003-1 3 3 0 002-1c2 5 3 10-1 15-3 6 3 11 8 11 7-1 9-7 5-12a5 5 0 01-1-2c-1-1-2-8 3-8 3-1 6 0 7 2s-1 5 1 5 2-2 3-4 3-2 4-1c2 4 0 9 4 10 4 2 4-4 10-4 3 0 6 2 7 8l-1 13c-1 4 2 8 7 9s9-3 9-8a42 42 0 00-1-6c0-3-1-8 2-9 2-1 3 1 4 2s3 2 4 1l1-5c0-5-2-11 7-13 5 0 6 3 6 8 0 2-1 4 1 6 2 1 4 2 6 0s1-5 1-8c0-6 8-9 16-18a63 63 0 018 15c2 3 2 7 2 12a10 10 0 01-2 5 26 26 0 00-2 3c-1 3-1 8 3 10a9 9 0 006-1 6 6 0 003-9l-2-6c1-17 5-24 13-25 10-2 17 5 15 13v10a4 4 0 003 3 4 4 0 005-3c0-2-1-7 1-8 1-1 3 1 3 3 1 18-2 20-3 28 0 7 4 11 11 9 3 0 5-4 5-7 0-6-2-11-2-33 0-4-1-8 3-12a13 13 0 0113-3c6 2 10 11 7 15a13 13 0 00-1 5c-1 4 1 8 6 9 6 0 8-6 6-12a12 12 0 013-10l14-14c7 8 14 18 14 30 0 7-2 18-5 21-5 6-2 13 4 15a8 8 0 003 0c5 0 9-4 9-9 1-3-1-5-3-7-3-5-3-26-1-30 5-7 17-6 24-9 3-2 8-1 12 4 4 6 1 21 2 25 0 2 2 4 4 3l3-3c3-3 6 1 7 4 1 4-3 10 2 13h5c2-1 2-4 2-9 0-20 8-34 13-35V0z"/><path d="M1794 38a1 1 0 000-1c-1-1-2 0-2 1h2zM1792 31a2 2 0 00-1-3 2 2 0 00-2 2 2 2 0 000 2c1 1 3 0 3-1zM1787 32a2 2 0 00-2 1 3 3 0 00-1 1 5 5 0 000 5 3 3 0 001 1 2 2 0 002 0 3 3 0 001-2c1-1 0-5-1-6zM1865 23l-2 1a1 1 0 001 1c0 1 2 0 1-1a1 1 0 000-1zM1881 53a3 3 0 00-1 3 2 2 0 001 2 3 3 0 004-2c0-2-2-4-4-3zM1824 27a4 4 0 00-3 4 3 3 0 002 2 4 4 0 006-2c1-3-3-5-5-4zM1551 53a3 3 0 00-1 3 2 2 0 001 2 3 3 0 004-2c0-2-2-4-4-3zM1535 23l-2 1a1 1 0 001 1c0 1 2 0 1-1a1 1 0 000-1zM1464 38a1 1 0 000-1c-1-1-2 0-2 1h2zM1457 32a2 2 0 00-2 1 3 3 0 00-1 1 5 5 0 000 5 3 3 0 001 1 2 2 0 002 0 2 2 0 001-2c1-1 0-5-1-6zM1494 27a4 4 0 00-3 4 3 3 0 002 2 4 4 0 006-2c1-3-3-5-5-4zM1462 31a2 2 0 00-1-3 2 2 0 00-2 2 2 2 0 000 2c1 1 3 0 3-1zM1124 38a1 1 0 000-1c-1-1-2 0-2 1h2zM1116 32a2 2 0 00-1 1 3 3 0 00-1 1 5 5 0 000 5 3 3 0 001 1 2 2 0 002 0 2 2 0 001-2c1-1 0-5-2-6zM1122 31a2 2 0 00-1-3 2 2 0 00-3 2 2 2 0 001 2c1 1 3 0 3-1zM1195 23l-3 1a1 1 0 002 1c0 1 2 0 1-1a1 1 0 000-1zM1153 27a4 4 0 00-2 4 3 3 0 001 2 4 4 0 007-2c1-3-3-5-6-4zM1211 53a3 3 0 00-2 3 2 2 0 001 2 3 3 0 005-2c0-2-2-4-4-3z"/></g></svg>'); 
        }
        }
      .about{
        background-color:  #242321;
      }
      .Contact{
        background-color:#121211
      }
      .shapedividers_com-1441::before{
          background-image: url('data:image/svg+xml;charset=utf8, <svg preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 73"><g fill="%23242321"><path d="M2000 0v14c-6 0-11 2-16 6a48 48 0 00-4 7 46 46 0 01-3 3c-3 4-6 6-10 6l-12-3c-4 0-6 4-8 7s-5 7-8 8c-4 1-8-1-12-3l-2-2a23 23 0 00-14-2 29 29 0 00-14 6l-3 2-12 15-12-15c-5-4-11-7-17-8a23 23 0 00-13 2c-5 3-10 7-15 5-3-1-6-5-8-8s-4-7-8-7-8 3-11 3c-5 0-8-2-11-6l-1-1-6-9c-5-5-11-6-18-6a26 26 0 01-5-1 27 27 0 01-6 1c-6 0-13 1-17 6l-6 8-2 2c-2 4-6 6-10 6s-7-3-11-3-7 4-9 7-4 7-8 8a10 10 0 01-6-1l-8-4a23 23 0 00-13-2 29 29 0 00-13 5 38 38 0 00-4 3l-13 15-12-15c-5-4-10-7-17-8a23 23 0 00-13 2c-5 3-9 7-14 5-4-1-6-4-8-8s-5-7-9-7-7 3-11 3-8-2-11-6l-1-1-6-9c-5-5-11-6-18-6a26 26 0 01-5-1 27 27 0 01-6 1c-6 0-13 1-17 6a52 52 0 00-5 7l-2 3c-3 4-7 6-11 6s-7-3-11-3-7 4-9 7-4 7-8 8-8-2-12-4l-2-1a23 23 0 00-13-2 30 30 0 00-15 7l-2 1-12 15-13-15c-5-4-10-7-17-8a23 23 0 00-13 2l-1 1c-4 2-8 5-13 4-4-1-6-5-8-8s-5-7-9-7-7 3-11 3-8-2-10-6l-1-1-7-9c-4-5-11-6-17-6a26 26 0 01-6-1 27 27 0 01-5 1c-7 0-13 1-18 6l-6 9-1 1c-3 4-7 6-11 6-3 0-7-3-11-3s-6 4-8 7-5 7-8 8-6 0-9-1l-6-4a23 23 0 00-13-2 29 29 0 00-14 6 41 41 0 00-3 2l-12 15-12-15h-1c-4-4-10-7-16-8a23 23 0 00-10 1 22 22 0 00-4 1c-4 3-9 7-14 5-3-1-6-5-8-8s-5-7-8-7l-11 3c-5 0-8-2-11-6l-2-2a70 70 0 00-5-8c-5-5-11-6-18-6a26 26 0 01-5-1 27 27 0 01-6 1c-7 0-13 1-18 6a62 62 0 00-5 8l-2 2c-2 4-6 6-10 6s-8-3-11-3-7 4-9 7-4 7-8 8c-5 2-10-2-14-5h-2a23 23 0 00-12-2 30 30 0 00-17 8l-12 15-12-15-2-2a30 30 0 00-15-6 23 23 0 00-13 2l-4 2c-4 2-7 4-10 3-4-1-6-5-9-8s-4-7-8-7-7 3-11 3-8-2-11-6l-1-1-6-9c-5-5-11-6-18-6a26 26 0 01-5-1 27 27 0 01-6 1c-6 0-13 1-17 6l-6 9-2 1c-2 4-6 6-10 6s-7-3-11-3-7 4-9 7-4 7-8 8-7-1-11-3l-3-2a23 23 0 00-13-2 30 30 0 00-16 7l-1 1-12 15-13-15-1-1c-5-4-10-7-16-7a23 23 0 00-13 2c-5 3-9 7-14 5-4-1-6-4-8-8s-5-7-9-7-7 3-11 3-8-2-10-6l-3-2a58 58 0 00-5-8c-4-5-11-6-17-6a26 26 0 01-6-1 27 27 0 01-5 1c-7 0-13 1-18 6a56 56 0 00-5 7l-2 3c-3 4-7 6-11 6s-7-3-11-3-6 4-8 7-5 7-9 8-9-2-14-5a23 23 0 00-13-2 30 30 0 00-15 7l-2 1-12 15-12-15-2-1c-4-4-10-7-15-7a23 23 0 00-14 2l-2 1c-4 3-8 5-12 4s-6-5-8-8-5-7-9-7-7 3-11 3-8-2-10-6l-1-1-6-9c-5-5-11-6-18-6a26 26 0 01-6-1 27 27 0 01-5 1c-7 0-13 1-18 6l-6 9-1 1c-3 4-6 6-10 6l-12-3c-4 0-6 4-8 7s-4 7-8 8-7 0-10-2l-4-3a23 23 0 00-14-2 29 29 0 00-14 6l-3 2-12 15-12-15h-1c-5-4-10-7-16-8a23 23 0 00-11 1l-2 1c-5 2-10 6-15 5-3-1-6-5-8-8s-4-7-8-7-8 3-11 3c-4 0-8-2-11-6l-2-2a65 65 0 00-5-8c-5-5-11-6-18-6l-7-1V0z"/><path d="M1287 64l8-6-3-9h-10l-4 9 9 6zM1255 53l13-9-5-16h-17l-5 16 14 9zM1539 64l8-6-3-9h-10l-3 9 8 6zM1411 70l11-7-4-13h-13l-4 13 10 7zM1507 53l13-9-5-16h-16l-6 16 14 9zM1789 68l8-6-3-10h-11l-3 10 9 6zM1667 69l8-6-3-9h-10l-3 9 8 6zM1757 57l13-10-5-16h-17l-5 16 14 10zM1853 70l9-6-4-10h-10l-3 10 8 6zM1912 73l12-8-5-14h-14l-5 14 12 8zM1062 72l-8-6 3-10h10l3 10-8 6zM1005 42l-10-7 4-12h12l4 12-10 7zM955 61l-7-5 3-8h9l2 8-7 5zM1097 71l-11-9 4-13h14l5 13-12 9zM726 62l-9-6 4-9h10l3 9-8 6zM850 69l-8-6 3-10h10l3 10-8 6zM753 47l-11-9 4-13h14l5 13-12 9zM474 65l-8-6 3-10h11l3 10-9 6zM598 71l-8-6 3-10h10l3 10-8 6zM502 49l-11-8 4-13h14l5 13-12 8zM281 66l8-6-3-10h-10l-3 10 8 6zM253 50l12-8-5-14h-14l-4 14 11 8zM97 70l7-4-3-8h-8l-3 8 7 4zM49 62l9-7-3-11H43l-3 11 9 7z"/></g></svg>');        
      }
      .frame-text26{
        color:gold
      }
      .footer{
        background-color:  #242321;
      }
      .footer p{
        color:white
      }
      .list-unstyled li a{
        color:white
      }
      .prev{
        color:gold
      }
      .next{
        color:gold
      }
      `
  }
 
  const [text] = useTypewriter({
    words: ["Freelancer", "Web Developer", "Designer"],
    loop: {},
    typeSpeed: 200,
    delaySpeed: 200,
  });
 
  return (

    <>
      <style>
        {bg}
      </style>
     
      <div className=" cool container"> 
      
        <nav class="navbar  navbar-expand">
          <a className="navbar-brand frame-text m-auto " href="#home">P</a>
          <div className=" navbar-collapse my-6" id="navbarScroll">
            <ul className="navbar-nav mr-auto" >

              <li className="nav-item active">
                <a className="nav-link active frame-text01" aria-current="page" href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link frame-text03" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link frame-text05" href="#contact">Contact</a>
              </li>
            </ul> <Toaster/>
            {
              Light ?
                <img
                  src="/playground_assets/night.png"
                  alt="lightmode"
                  className="brightness"
                
                  onClick={() =>{ setToDark(!Light) ; moon()}}
                />
                :
                <img
                  src="/playground_assets/morning.png"
                  alt="darkmode"
                  className="darkness"
                  onClick={() =>{ setToDark(!Light); sun()}}
                />
            }
            
          </div>
        </nav>
      </div>

      <section className="bag" id="home">
        <section className="container-fluid back container-fuild  ">
          <div className="row m-auto text-center">
            <div className="col-sm-6 frame-text07 text-center  m-auto  " >
              <span>HI,</span>
              <br></br>
              <span>i’m marwane,</span>
              <br></br>
              <span className="text-success">{text}</span>
              <Cursor cursorColor='red' cursorStyle="...|" /><br></br>
              <div className=" text-center">
                <a download href={CV} className=" showmore m-auto btn ">PDF Version</a>
              </div>
            </div>
            <div className="col-sm-6 my-5 text-center m-auto hy  ">
              <div className=" pullup "><div className="portav ">
                {Light ?
                  <img className="myavatar m-auto " src="/playground_assets/AvatarLight.png"></img>
                  :
                  <img className="myavatar  m-auto" src="/playground_assets/AvatarDark.png"></img>
                }

              </div>
              </div>

              <br />
              <div className="text-center m-auto links">
                <a href='#'><img
                  src="/playground_assets/test212-okeg-200h.png"
                  alt="test212"
                  className="frame-test2 m-auto"
                /></a>
                <a href='#'><img
                  src="/playground_assets/test2372-2q2-200h.png"
                  alt="test2372"
                  className="frame-test3 m-auto"
                /></a>
                <a href='#'><img
                  src="/playground_assets/test2373-68af-200h.png"
                  alt="test2373"
                  className="frame-test4 m-auto"
                /></a></div>
                 <div className="linx text-center">
                <a href='#' className="trdfirst"><img
                  src="/playground_assets/test212-okeg-200h.png"
                  alt="test212"
                  className="frame-test2 m-auto"
                /><b><a href="https://github.com/Marwanelaks"> /Marwanelaks</a></b>
             </a><br/>
                <a href='#' className="trdmid"><img
                  src="/playground_assets/test2372-2q2-200h.png"
                  alt="test2372"
                  className="frame-test3 m-auto"
                /><b><a href="https://twitter.com/OPSSI41"> /OPSSI41</a></b></a><br/>
                <a href='#' className="trd"><img
                  src="/playground_assets/test2373-68af-200h.png"
                  alt="test2373"
                  className="frame-test4 m-auto"
                /><b><a href="https://www.linkedin.com/in/marwane-laks/"> /marwane-laks</a></b></a></div>
            </div></div></section>
        <ul id="animation">
          <li className="bg"></li>
          <li className="bg"></li>
          <li className="bg"></li>
          <li className="bg"></li>
          <li className="bg"></li>
          <li className="bg"></li>
          <li className="bg"></li>
          <li className="bg"></li>
          <li className="bg"></li>
        </ul>
      </section>
      <div className=" hrf">
         
      </div>


      <div className="custom-shape-divider-top-1674814307">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>

      <div className="portf" id="portfolio">
        <div className=" container ">
          <div className="row col-md-12 text-center ">
            
            <span className="frame-text18 text-center m-auto">
              Portfolio
            </span>
            <span className="frame-text20 text-center m-auto">
              latest projects
            </span>
          </div>
        </div>
      
        <div className="row m-auto text-center ">

     <div className="col-sm-12 text-center m-auto">
     <div className="slider">
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <span className="ggl">{projects[currentIndex]}</span>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
      </div>
      <div className="col-sm-3" >
       </div> 
       </div> 
        <div className="shapedividers_com-4385">
        </div>

      </div>
      <div className="about" id="about">
        <div className="container">
          <div className="row m-auto text-center">
            <span className="frame-text18 col-md-12 text-center">
              About
            </span>
            <div className="row text-center pandi ">
              <div className="col-md-3 text-center m-auto aboutIcon">
                <img className=" icon" src="/playground_assets/img1.png"></img>
              </div>

              <p className=" col-md-8  typing">
                I am a 20 year old Moroccan junior full stack developer.
                I've been working with React, laravel, HTML/CSS/MySQL/JavaScript/PHP
                and I've been creating user interfaces with Figma for just under 2 years
                now and I'm confident that I have the skills and knowledge to be successful
                in this field. I am excited to get started in this field and help
              </p>
            </div>
          </div>
          <div className="row text-center m-auto">

    <div class="contain col-3 m-auto">
    <div class="card text-center cards">
      <div class="front"><img className="im imf m-auto " src="/playground_assets/test1.png"></img>
      <span className="db m-auto db ">Front-End</span>
      </div>
      <div class="backe">
           <ul className="m-auto sol">
            <span className=""><b>Here are some of my front-end development skills :</b></span>
              <li className=" m-auto my-2">HTML, CSS and JavaScript</li>
              <li className=" m-auto my-1">CSS Framework (Bootstrap)</li>
              <li className=" m-auto my-1">JavaScript libraries and frameworks like React, JQUERY... </li>
              <li className=" m-auto my-1">React Libraries such as Redux, Redux ToolKit... </li>
              <li className=" m-auto my-1">Debugging and troubleshooting skills</li>
              <li className=" m-auto my-1">Version control using Git</li>
              <li className=" m-auto my-1">DOM manipulation and optimizing website performance</li>
              <li className=" m-auto my-1">Familiarity with API integrations</li>
              <li className=" m-auto my-1">Ability to work with design and UX teams to implement creative concepts.</li>
              <li className=" m-auto">Familiarity with Agile development methodologies</li>
            </ul>
      </div>
    </div>
  </div>
  <div class="contain col-sm-3 m-auto">
    <div class="card text-center cards">
      <div class="front"><img className="im imb m-auto " src="/playground_assets/test2.png"></img>
      <span className="db m-auto ">Back-End</span>
      </div>
      <div class="backe">
      <ul className="m-auto sol">
            <span className=""><b>Here are some of my back-end development skills :</b></span><br></br>
              <li className=" m-auto my-3">MySQL: Knowledge of working with relational databases, SQL querying, and database design.</li>
              <li className=" m-auto my-2">PHP: Proficiency in PHP for server-side scripting and web development.</li>
              <li className=" m-auto my-2">Laravel: Understanding of the Laravel framework for building web applications. </li>
              <li className=" m-auto my-2">MongoDB: Familiarity with NoSQL databases, specifically MongoDB, for handling unstructured data. </li>
              <li className=" m-auto my-2">Node.js: Ability to use Node.js as a JavaScript runtime for server-side development.</li>
              <li className=" m-auto">Express: Proficiency in the Express framework for building web servers and APIs.</li>
            </ul>
      </div>
    </div>
  </div>
  <div class="contain col-sm-3 m-auto">
    <div class="card text-center cards">
      <div class="front"><img className="im iml m-auto " src="/playground_assets/E-learning.png"></img>
      <span className="db m-auto ">E-Learning</span>
      </div>
      <div class="backe">
        
      </div>
    </div>
  </div>
            
          </div>
        </div>
        <div className="shapedividers_com-1441" />


      </div>
      <div className="Contact text-center">
        <div className=" bolly" id="contact">
        <img
          src="/playground_assets/Contact.png"
          alt="IMAGEPngtreebusinessconceptgrowthandcareer725892414612"
          className="frame-i-m-a-g-e-pngtreebusinessconceptgrowthandcareer72589241"
        />
        <div  className="frame-text24" >
          <span>Interested in collaborating with me ?</span>
        </div>
        <span className="frame-text26">
          <span>
            I’m always open to discussing product design work or partnership
            opportunities.
          </span>
        </span>
      {
        Light ? <ContactForm color="light"/> : <ContactForm color="dark"/>
      }
         
        
        </div>
        <footer className="footer">
          
      <div className="container"><Fbcomments/>
        <div className="row">
          <div className="col-lg-12">
            
            <ul className="list-unstyled">

              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <p className="mt-3 mb-3">&copy; 2023 Portfolio. All Rights Reserved.</p>
          </div>
        </div>
      </div>
      </footer>
      </div>
    
    </>
  );
}

export default App;