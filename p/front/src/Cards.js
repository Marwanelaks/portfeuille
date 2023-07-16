import React,{useState} from 'react'
import { Details } from './Deatils'
import ReactModal from "react-modal";
import "./App.css"


export default function Cards(props) {
   
   const [currentIndex, setCurrentIndex] = useState(0);
   const images = props.imgs;
 
   const prevSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };



 const [modalIsOpen, setModalIsOpen] = useState(false);
 const [modal2IsOpen, setModal2IsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function openModal2() {
    setModal2IsOpen(true);
  }

  function closeModal2() {
    setModal2IsOpen(false);
  }

  return (
    <div>

<div className="row m-auto text-center ">

<div className="col-sm-6 card carde " onClick={openModal}>
  <img className=" m-auto img-responsive prj1" src={props.pic}></img>     

</div>
<ReactModal isOpen={modalIsOpen} onRequestClose={closeModal} className="my-modal">
<h2 className='text-center pd'>Project Details</h2>
<h2 className="text-center pt">{props.title} :</h2>

    <h6 className="text-center"><i>This is a project that enables football fans to know all the information about the matches (time, stadium, league, etc.)</i></h6>
  <div className="container-fluid">
  <div className="slider">
<button className="prev" onClick={prevSlide}>
&#10094;
</button>
<img className="slimg" src={images[currentIndex]} alt="slider" />
<button className="next" onClick={nextSlide}>
&#10095;
</button>
</div>
    
<h6 className="details2"> {props.descr}</h6>
<div className='text-center m-auto my-5'>
 <a href={props.links.github} className='btn codesource'><b>CODE</b> <i class="fa fa-github"></i></a> 
 <a href={props.links.site} className='btn codesource'><b>RESULT</b> <i class="fa fa-regular fa-globe"></i></a> 
</div> 
 </div>
  
<button onClick={closeModal} className="closebtn"><b>&times;</b></button>

</ReactModal>


<div className="col-sm-4 card carde" onClick={openModal2}>
<img className=" m-auto d-block img-responsive prj2" src={props.pic2}></img>

</div>
<ReactModal isOpen={modal2IsOpen} onRequestClose={closeModal2} className="my-modal">
<h2 className='text-center pd'>Project Details</h2>
<h2 className="text-center pt">{props.title2} :</h2>

    <h6 className="text-center"><i>This is a project that enables football fans to know all the information about the matches (time, stadium, league, etc.)</i></h6>
  <div className="container-fluid">
  <div className="slider">
<button className="prev" onClick={prevSlide}>
&#10094;
</button>
<img className="slimg" src={images[currentIndex]} alt="slider" />
<button className="next" onClick={nextSlide}>
&#10095;
</button>
</div>
    
<h6 className="details2"> {props.descr2}</h6>
<div className='text-center m-auto my-5'>
<a href={props.links2.github} className='btn codesource'><b>Code</b> <i class="fa fa-github"></i></a> 
<a href={props.links2.site} className='btn codesource'><b>RESULT</b> <i class="fa fa-regular fa-globe"></i></a> 
</div> 
 </div>
<button onClick={closeModal2} className="closebtn"><b>&times;</b></button>
</ReactModal>
</div>

 </div>
  )
}
