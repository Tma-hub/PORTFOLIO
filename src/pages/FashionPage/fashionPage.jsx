import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

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

const fashionItems = [
  { title: "ARVEN", image: ARVEN },
  { title: "ELVAR", image: ELVAR },
  { title: "YAVIRA", image: YAVIRA },
  { title: "SAMANDRA", image: SAMANDRA },
  { title: "KIMIKO", image: KIMIKO },
  { title: "ANATU", image: ANATU },
  { title: "NOVIRA", image: NOVIRA },
  { title: "ARJAN", image: ARJAN },
  { title: "MEHR", image: MEHR },
];

export default function FashionPage() {
  const [activeIndex, setActiveIndex] = useState(1);

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? fashionItems.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === fashionItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="fashion-page">
      <Navbar />

      <main className="fashion-content">
        <section className="fashion-intro">
          <h1>Fashion</h1>
          <p>
            Selected fashion works, garments, collections and textile pieces.
          </p>
        </section>

        <section className="fashion-carousel">
          <button className="carousel-arrow left" onClick={prevSlide}>
            ←
          </button>

          <div className="carousel-track">
            {fashionItems.map((item, index) => {
              const offset = index - activeIndex;

              return (
                <article
                  key={item.title}
                  className={`carousel-item ${
                    index === activeIndex ? "active" : ""
                  }`}
                  style={{ "--offset": offset }}
                  onClick={() => setActiveIndex(index)}
                >
                  <img src={item.image} alt={item.title} />
                  <p>{item.title}</p>
                </article>
              );
            })}
          </div>

          <button className="carousel-arrow right" onClick={nextSlide}>
            →
          </button>
        </section>
      </main>
    </div>
  );
}