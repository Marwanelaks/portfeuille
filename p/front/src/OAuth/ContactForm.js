// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import './ModalForm.css';
// import { useNavigate } from 'react-router-dom';
// import FacebookLog from './FacebookLogin';
// import Login from './Login';
// import toast, { Toaster } from 'react-hot-toast';
// import ReactModal from 'react-modal';
// function ModalForm() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [user, setUser] = useState();
//   const [formaValidation , setFormaValidation] = useState(true)
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate()
  
//   const handleOpenModal = () => {
//     setIsOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsOpen(false);
//   };
//   const Validator = (pass) =>{
//     console.log(pass)
//     if(pass.length < 8){
//       setFormaValidation(false)
//     }
//     else{
//       setPassword(pass)
//       setFormaValidation(true)
//     }
//   }
//   const createUser = async (e) => {
//     e.preventDefault();
  
//     try {
//       await axios.get("http://localhost:3009/users",{
//         headers: {
//           'api-key': process.env.REACT_APP_API_KEY
//         }
//        })
//       .then((res) => {
//         const filteredUsers = res.data.filter((user) => user.Email === email && user.Password === password);
//         setUser(filteredUsers);
//         if(formaValidation){
//           if (user.length === 1) {
//               const username = user[0].Name
//               navigate(`/messages/${username}`, { state: {userid : user[0].id , nom : username } });
              
//             } else {
//               navigate("/newUser", { state: { param1: password, param2: email } });
//             }
//         }
//       });
      
//     } catch (error) {
//       console.log(error);
//     }
//   };
  
//   return (
//     <div>
// <Toaster/>

//       <button className=' btn btn-success text-center ' onClick={handleOpenModal}>Start a conversation</button>

// <ReactModal isOpen={isOpen} onRequestClose={handleCloseModal} >


//         <div className="modal-content">
//           <div className="modal-header">
//             <h4 className="modal-title">Contact us</h4>
//             <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleCloseModal}>
//               <span>&times;</span>
//             </button>
//           </div>
//           <div className="modal-body">
//           <form onSubmit={createUser}>
//  			<div class="social-container">
//        <span className='glogin'><Login/></span>
//        <span className='flogin'><FacebookLog/></span> 
//  			</div>
//  			<div className="form-group">
//        <label className='mail' htmlFor="mail">E-mail :</label>
//       <input size={35} className="form-control" id="emailInput" type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required/>
//        <label className='pass' htmlFor="pass">Password :</label>
//       <input size={35} type="password" className='form-control' placeholder="Password" onChange={(e)=>Validator(e.target.value)} required/>
//       <div className='text-danger'>{formaValidation ? " " : "the password must be 8 character at least"}</div>
//       </div>
//       {/* <a href="#">Forgot your password?</a> */}
//  			<button className='sign-btn' type='submit' >Sign In</button>
//  		</form>
//           </div>
//         </div>
    
     
//     </ReactModal> 
    
//     </div>
//   );
// }
// export default ModalForm;





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
