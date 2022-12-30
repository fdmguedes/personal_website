import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/project1.png";
import IMG2 from "../../assets/project2.png";
import IMG3 from "../../assets/project3.png";
import IMG4 from "../../assets/project4.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "IronBomb Multiplayer",
    github: "https://github.com/MeerKatPT/game_project",
    demo: "https://meerkatpt.github.io/game_project/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Portuguese News Portal",
    github: "https://github.com/MeerKatPT/2ModuleProject",
    demo: "http://frontline-portugal.cyclic.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Personal Website - ReactJS",
    github: "https://github.com/MeerKatPT/personal_website",
    demo: "https://filipe-guedes.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Todo List - VueJS",
    github: "https://github.com/MeerKatPT/VueJS-to-do-list-app",
    demo: "https://todolist-vuejsapp.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image ">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  rel="noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  rel="noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
