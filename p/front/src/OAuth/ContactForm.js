import React, { useEffect, useState } from 'react';
import './ModalForm.css';
import axios from 'axios';
const ContactForm = (props) => {
  const [bgcolor,setcolor] = useState()
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    content: '',
  });
// useEffect(()=>{
let colorbg
  if(props.color === "dark"){
    colorbg = `frm{
      background-color: rgba(0, 0, 0, 0.864);
    }
    label{
      color:white;
    }`
  }
  else{
   colorbg = `frm{
    background-color: orangered;
  }`
  }
// })
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3009/send', formData ,{
          headers: {
            'api-key': process.env.REACT_APP_API_KEY
          }
         })
    setFormData({
      name: '',
      email: '',
      message: '',
    });

  };

  return (
    <>
    <style>
      {colorbg}
    </style>
    <form  className='frm text-center m-auto'  onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label><br></br>
        <input
          id="name"
          name="nom"
          value={formData.name}
          onChange={handleChange}
          className="frmc"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label><br></br>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="frmc"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label><br></br>
        <textarea
          id="message"
          name="content"
          value={formData.message}
          onChange={handleChange}
          className="frmc"
          style={{height:"9rem"}}
          required
        ></textarea>
      </div><br></br>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </>
  );
};

export default ContactForm;
