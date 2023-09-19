import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/project2.png";
import IMG2 from "../../assets/IMG5.png";
import VID3 from "../../assets/project3.mov";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Portuguese News Portal",
    github: "https://github.com/fdmguedes/2ModuleProject",
    demo: "http://frontline-portugal.cyclic.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Child Spiritual Development - WordPress",
    demo: "https://childspiritualdevelopment.org/",
  },
  {
    id: 3,
    image: VID3,
    title: "Workoutside",
    demo: "",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          const isVideo = String(image).endsWith('.mov'); // Identify if the media is a video
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                {isVideo ? (
                  <div className="portfolio__item-video">
                    <video src={image} controls></video>
                  </div>
                ) : (
                  <img src={image} alt={title} />
                )}
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {github && (
                  <a
                    href={github}
                    className="btn"
                    rel="noreferrer"
                    target="_blank"
                  >
                    GitHub
                  </a>
                )}
                {demo ? (
                  <a
                    href={demo}
                    className="btn btn-primary"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="coming-soon">Coming Soon</span>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
