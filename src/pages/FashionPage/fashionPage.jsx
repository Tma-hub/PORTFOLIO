import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Carousel from "../../components/Carousel/Carousel";

import ARVEN from "../../img/fashion_photos/ARVEN.png";
import ELVAR from "../../img/fashion_photos/ELVAR.png";
import YAVIRA from "../../img/fashion_photos/YAVIRA.png";
import SAMANDRA from "../../img/fashion_photos/SAMANDRA.png";
import KIMIKO from "../../img/fashion_photos/KIMIKO.png";
import ANATU from "../../img/fashion_photos/ANATU.png";
import NOVIRA from "../../img/fashion_photos/NOVIRA.png";
import ARJAN from "../../img/fashion_photos/ARJAN.png";
import MEHR from "../../img/fashion_photos/MEHR.png";

import "./fashionPage.css";

const sportItems = [
 { title: "KIMIKO", image: KIMIKO },
  { title: "SAMANDRA", image: SAMANDRA },
   { title: "MEHR", image: MEHR }
];

const lifestyleItems = [
  
  { title: "ANATU", image: ANATU },
  { title: "NOVIRA", image: NOVIRA },
  { title: "ARJAN", image: ARJAN },
  { title: "ARVEN", image: ARVEN },
  { title: "ELVAR", image: ELVAR },
  { title: "YAVIRA", image: YAVIRA }
];

export default function FashionPage() {
  return (
    <div className="fashion-page">
      <Navbar />

      <main className="fashion-content">
        <section className="fashion-intro">
          <h1>Fashion</h1>
          <p>Selected fashion works, garments, collections and textile pieces.</p>
        </section>

        <Carousel title="Sportswear" items={sportItems} />
        <Carousel title="Lifestyle" items={lifestyleItems} />
      </main>
    </div>
  );
}