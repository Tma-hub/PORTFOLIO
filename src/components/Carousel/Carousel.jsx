import { useState } from "react";
import "./Carousel.css";

export default function Carousel({ title, items }) {
  const [activeIndex, setActiveIndex] = useState(1);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="carousel-section">
      <h2>{title}</h2>

      <div className="fashion-carousel">
        <button className="carousel-arrow left" onClick={prevSlide}>
          ←
        </button>

        <div className="carousel-track">
          {items.map((item, index) => {
            const offset = index - activeIndex;

            return (
              <article
                key={item.title}
                className={`carousel-item ${index === activeIndex ? "active" : ""}`}
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
      </div>
    </section>
  );
}