import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/project1.png";
import IMG2 from "../../assets/project2.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image ">
            <img src={IMG1} alt="projectgameImg" />
          </div>
          <div className="portfolio__item-cta">
            <h3>IronBomb Multiplayer Game</h3>
            <a href="https://github.com/MeerKatPT/game_project" className="btn">
              GitHub Repo
            </a>
            <a
              href="https://meerkatpt.github.io/game_project/"
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image ">
            <img src={IMG2} alt="newsprojectImg" />
          </div>
          <div className="portfolio__item-cta">
            <h3>Portuguese News Hub</h3>
            <a
              href="https://github.com/MeerKatPT/2ModuleProject"
              className="btn"
            >
              GitHub Repo
            </a>
            <a
              href="https://frontline-portugal.cyclic.app/"
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image ">
            <img src={IMG2} alt="newsprojectImg" />
          </div>
          <div className="portfolio__item-cta">
            <h3>Personal Website</h3>
            <a
              href="https://github.com/MeerKatPT/2ModuleProject"
              className="btn"
            >
              GitHub Repo
            </a>
            <a
              href="https://frontline-portugal.cyclic.app/"
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
