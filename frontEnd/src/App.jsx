import React from 'react';
import Homepage from "./pages/Homepage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Homepage/>} />
              <Route path="/login" element={<LoginPage/>} />
          </Routes>
        </BrowserRouter>
    );
};

export default App;