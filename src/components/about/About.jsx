import React from "react";
import "./about.css";
import ME from "../../assets/dev.png";
import { BiCode } from "react-icons/bi";
import { IoSchoolOutline } from "react-icons/io5";
import { GiWorld } from "react-icons/gi";

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="AboutImage" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiCode className="about__icon" />
              <h5>Experience</h5>
              <small>Less Than 2 Years Developing</small>
            </article>
            <article className="about__card">
              <IoSchoolOutline className="about__icon" />
              <h5>Education</h5>
              <small>FullStack Developer @ Ironhack</small>
            </article>
            <article className="about__card fun__fact">
              <GiWorld className="about__icon" />
              <h5>Fun Fact</h5>
              <small>I've only visted 9,33% countries in the world yet</small>
            </article>
          </div>
          <p>
            I am a Full-Stack developer with a background in social sciences.
            Technology and education are my fields of expertise. I have a
            passion for coding, problem-solving, teaching and connecting with
            people.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
