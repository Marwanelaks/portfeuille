import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NewUser from './OAuth/newUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './ChatApp/Test';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/newUser' element={<NewUser/>} />
      <Route path='/messages/:username' element={<Test/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



