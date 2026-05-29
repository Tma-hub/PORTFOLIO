import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage/aboutPage";
import WorkPage from "./pages/WorkPage/workPage";
import ContactMe from "./pages/ContactMe/contactMe";
import FashionPage from "./pages/FashionPage/fashionPage";
import GraphicsPage from "./pages/GraphicsPage/graphicsPage";
import DigitalPage from "./pages/DigitalPage/digitalPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <BrowserRouter basename="/PORTFOLIO">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
        />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<WorkPage />} />
        <Route path="/contact" element={<ContactMe />} />

        <Route path="/fashion" element={<FashionPage />} />
        <Route path="/graphics" element={<GraphicsPage />} />
        <Route path="/digital" element={<DigitalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;