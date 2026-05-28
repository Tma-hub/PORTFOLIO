import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage/aboutPage';
import ContactMe from "./pages/ContactMe/contactMe";
import WorkPage from "./pages/WorkPage/workPage";
import GraphicsPage from "./pages/GraphicsPage/graphicsPage";
import FashionPage from "./pages/FashionPage/fashionPage";
import DigitalPage from "./pages/DigitalPage/digitalPage";


import './global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
     <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/portfolio" element={<WorkPage />} />
  <Route path="/contact" element={<ContactMe />} />
  <Route path="/graphics" element={<GraphicsPage />} />
  <Route path="/fashion" element={<FashionPage />} />
  <Route path="/digital" element={<DigitalPage />} />
</Routes>
    </HashRouter>
  </React.StrictMode>,
);
