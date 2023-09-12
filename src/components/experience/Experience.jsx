import React from "react";
import "./experience.css";
import { IoLogoNodejs } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import { SiEmberdotjs } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";
import { FaDocker } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiExpress } from "react-icons/si";

function Experience() {
  return (
    <section id="experience">
      <h2>My Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Programming Languages & Frameworks</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiReact className="experience__details-icon" />
              <h4>ReactJS</h4>
            </article>
            <article className="experience__details">
              <IoLogoNodejs className="experience__details-icon" />
              <h4>NodeJS</h4>
            </article>
            <article className="experience__details">
              <TbBrandNextjs className="experience__details-icon" />
              <h4>NextJS</h4>
            </article>
            <article className="experience__details">
              <SiEmberdotjs className="experience__details-icon" />
              <h4>EmberJS</h4>
            </article>
            <article className="experience__details">
              <SiExpress className="experience__details-icon" />
              <h4>ExpressJS</h4>
            </article>
            <article className="experience__details">
              <SiTypescript className="experience__details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Learning</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Development Tools</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsGithub className="experience__details-icon" />
              <h4>Git & GitHub</h4>
            </article>
            <article className="experience__details">
              <FaFigma className="experience__details-icon" />
              <h4>Figma</h4>
            </article>
            <article className="experience__details">
              <FiFramer className="experience__details-icon" />
              <h4>Framer</h4>
            </article>
            <article className="experience__details">
              <FaDocker className="experience__details-icon" />
              <div>
                <h4>Docker</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Web Technologies</h3>
          <div className="experience__content">
            <article className="experience__details">
              <h4>Frontend/Backend</h4>
            </article>
            <article className="experience__details">
              <h4>REST APIs</h4>
            </article>
            <article className="experience__details">
              <h4>Responsive Designs</h4>
            </article>
            <article className="experience__details">
              <div>
                <h4>WordPress</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Methodologies & Collaboration</h3>
          <div className="experience__content">
            <article className="experience__details">
              <h4>Agile & Scrum</h4>
            </article>
            <article className="experience__details">
              <h4>ShapeUp</h4>
            </article>
            <article className="experience__details">
              <h4>Confluence & Jira</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Language Skills</h3>
          <div className="experience__content language-skills">
            <article className="experience__details">
              <h4> 🇵🇹 Portuguese - Native</h4>
            </article>
            <article className="experience__details">
              <h4> 🇬🇧 English - Fluent</h4>
            </article>
            <article className="experience__details">
              <h4> 🇪🇸 Spanish - Intermediate</h4>
            </article>
            <article className="experience__details">
              <h4> 🇳🇱 Dutch - Learning</h4>
            </article>
            <article className="experience__details">
              <h4> 🇻🇳 Vietnamese - Beginner</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
