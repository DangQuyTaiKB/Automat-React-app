import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Navigation from './components/common/navigation';
import Home from './pages/home';
import Automat from './pages/automat';
import Documents from './pages/documents';
import Templates from './pages/templates';
import ContactUs from "./pages/contactUs";

function App() {
  return(
    <BrowserRouter>
      <div className="app">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="automat" element={<Automat/>}/>
        <Route path="documents" element={<Documents/>}/>
        <Route path="templates" element={<Templates/>}/>
        <Route path="contactUs" element={<ContactUs/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
