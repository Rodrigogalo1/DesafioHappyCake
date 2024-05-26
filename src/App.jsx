import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar"; 

import HomePage from "./views/HomePage";
import ContactoPage from "./views/ContactoPage"; 
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <div>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="*" element={<NotFound />} />  
      </Routes>
    </div>
  );
};

export default App;