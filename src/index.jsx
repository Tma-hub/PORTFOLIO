import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage/aboutPage';
import ContactMe from "./pages/ContactMe/contactMe";
import WorkPage from "./pages/WorkPage/workPage";
import GraphicsPage from "./pages/GraphicsPage/graphicsPage";


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
</Routes>
    </HashRouter>
  </React.StrictMode>,
);
