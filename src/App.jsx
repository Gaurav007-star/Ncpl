import React from "react";
import {BrowserRouter,Routes,Route} from "react-router";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import ComingSoon from "./pages/ComingSoon/ComingSoon";


const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<ComingSoon/>}/>
      {/* <Route path="/about" element={<AboutPage/>}/>
      <Route path="/coming" element={<ComingSoon/>}/> */}

    </Routes>
  </BrowserRouter>
};

export default App;
