import './App.css';
import { useState } from 'react';

import NavbarComponent from './components/common/navbar';

import Home from './pages/home';
import Automat from './pages/automat';
import Documents from './pages/documents';
import ContactUs from "./pages/contactUs";

function App() {
  const [page,setPage]=useState("automat");
  const HandleSelect=(key)=>{
    setPage(key);
  }
  return(
    <>
      <NavbarComponent handleSelect={HandleSelect}/>
      {page==="automat"?<Automat/>:<></>}
      {page==="contactUs"?<ContactUs/>:<></>}
      {page==="home"?<Home/>:<></>}
      {page==="documents"?<Documents/>:<></>}
    </>
  );
}

export default App;
