import React from "react";
import "./about.css";
import PHOTO1 from "../../assets/photo1.jpeg"
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
            <img src={PHOTO1} alt="AboutImage" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiCode className="about__icon" />
              <h5>Experience</h5>
              <small>+ Than 1 year developing</small>
            </article>
            <article className="about__card">
              <IoSchoolOutline className="about__icon" />
              <h5>Education</h5>
              <small>FullStack Developer @ Ironhack</small>
            </article>
            <article className="about__card fun__fact">
              <GiWorld className="about__icon" />
              <h5>Fun Fact</h5>
              <small>
                I've visited 9,33% countries in the world (and counting!){" "}
              </small>
            </article>
          </div>
          <p>
          👋 Hi there! I'm Filipe, a Full Stack Developer 🚀 passionate about crafting engaging and functional web experiences. Based in Lisbon 🇵🇹, I've lived in various parts of the world including Vietnam 🇻🇳, Slovenia 🇸🇮, and the Netherlands 🇳🇱.
          <p>
          💼 Professional Journey:
          At Uniplaces, I'm currently part of a dynamic team focused on both front-end and back-end development. I love the immediate impact of my work as we strive to enhance user experience. Parallelly, I engage in freelance projects, tackling diverse tasks ranging from WordPress optimization to React-based applications.
          </p>
          👨‍💻 Technical Chops:
          Skilled in a wide array of technologies including PHP, NodeJS, ReactJS, and NextJS, I'm always on the lookout for opportunities to expand my skill set. Next on my list? Diving into TypeScript!
          <p>
          🎯 What Drives Me:
          Transitioning from an English and ICT teacher to a developer has instilled in me a strong belief in continuous learning and upskilling. The challenges and rewards of problem-solving in this field keep me motivated.

          </p>
          Connect with me for collaborations, conversations, or simply to say hi. Let's create something extraordinary together!

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
